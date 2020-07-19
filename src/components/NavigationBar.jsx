import { Component } from "react";
import { Responsive } from "semantic-ui-react";
import NavBarMobile from "./navbar/NavBarMobile";
import NavBarDesktop from "./navbar/NavBarDesktop";
import NavBarChildren from "./navbar/NavBarChildren";

class NavigationBar extends Component {
    state = {
        visible: false,
    };

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children, leftItems, rightItems } = this.props;
        const { visible } = this.state;

        return (
            <>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        leftItems={leftItems}
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        rightItems={rightItems}
                        visible={visible}
                    >
                        <NavBarChildren>{children}</NavBarChildren>
                    </NavBarMobile>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
                    <NavBarChildren>{children}</NavBarChildren>
                </Responsive>
            </>
        );
    }
}

export default NavigationBar;

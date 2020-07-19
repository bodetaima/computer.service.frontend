import { Menu } from "semantic-ui-react";

const SideBar = props => {
    const types = props.types.map(type => {
        const childs = type.childType.map(child => {
            return <Menu.Item name={child.name} key={child.id} />;
        });

        return (
            <Menu.Item key={type.id}>
                <Menu.Header>{type.name}</Menu.Header>
                <Menu.Menu>{childs}</Menu.Menu>
            </Menu.Item>
        );
    });

    return <Menu vertical>{types}</Menu>;
};

export default SideBar;

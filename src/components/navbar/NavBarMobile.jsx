import _ from "lodash";
import { Icon, Image, Menu, Sidebar, Input } from "semantic-ui-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBarMobile = ({ children, leftItems, onPusherClick, onToggle, rightItems, visible }) => (
    <Sidebar.Pushable>
        <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible={visible} width="thin">
            {_.map(leftItems, (item) => (
                <Menu.Item onClick={onToggle} {...item} as={Link} />
            ))}
            <Menu.Item>
                <Input size="mini" placeholder="Search..." />
            </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: "100vh" }}>
            <Menu fixed="top" inverted>
                <Menu.Item>
                    <Image size="mini" src={logo} as={Link} to="/" />
                </Menu.Item>
                <Menu.Item onClick={onToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Menu position="right">
                    {_.map(rightItems, (item) => (
                        <Menu.Item {...item} />
                    ))}
                </Menu.Menu>
            </Menu>
            {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

export default NavBarMobile;

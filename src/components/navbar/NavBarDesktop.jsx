import _ from "lodash";
import { Image, Menu } from "semantic-ui-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBarDesktop = ({ leftItems, rightItems }) => (
    <Menu fixed="top" inverted>
        <Menu.Item>
            <Image size="mini" src={logo} />
        </Menu.Item>
        {_.map(leftItems, item => (
            <Menu.Item {...item} as={Link} />
        ))}
        <Menu.Menu position="right">
            {_.map(rightItems, item => (
                <Menu.Item {...item} />
            ))}
        </Menu.Menu>
    </Menu>
);

export default NavBarDesktop;

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
    const types = props.types.map((type) => {
        const childs = type.childType.map((child) => {
            return (
                <Menu.Item
                    as={Link}
                    to={{ pathname: "/" + child.type, state: { name: child.name, type: child.type } }}
                    name={child.name}
                    key={child.id}
                />
            );
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

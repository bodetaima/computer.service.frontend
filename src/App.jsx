import { Component } from "react";
import { Container } from "semantic-ui-react";
import Routes from "./routes";
import NavigationBar from "./components/NavigationBar";

const leftItems = [
    { content: "Trang chủ", to: "/", key: "home" },
    { content: "Đặt chỗ", to: "/parts", key: "parts" },
];
const rightItems = [
    { as: "a", content: "Đăng nhập", key: "login" },
    { as: "a", content: "Đăng ký", key: "register" },
];

class App extends Component {
    render() {
        return (
            <NavigationBar leftItems={leftItems} rightItems={rightItems}>
                <Container>
                    <Routes />
                </Container>
            </NavigationBar>
        );
    }
}

export default App;

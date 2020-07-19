import { Component } from "react";
import { Container } from "semantic-ui-react";
import Routes from "./routes";
import NavigationBar from "./components/NavigationBar";

const leftItems = [
    { content: "Home", to: "/", key: "home" },
    { content: "Parts", to: "/parts", key: "parts" },
];
const rightItems = [
    { as: "a", content: "Login", key: "login" },
    { as: "a", content: "Register", key: "register" },
];

class App extends Component {
    render() {
        return (
            <Container fluid>
                <NavigationBar leftItems={leftItems} rightItems={rightItems}>
                    <Routes />
                </NavigationBar>
            </Container>
        );
    }
}

export default App;

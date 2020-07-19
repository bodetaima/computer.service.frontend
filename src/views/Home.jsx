import { Component } from "react";
import { Container } from "semantic-ui-react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "WeFixIt";
    }

    render() {
        return (
            <Container>
                <div>Home</div>
            </Container>
        );
    }
}

export default Home;

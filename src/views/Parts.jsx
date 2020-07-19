import { Component } from "react";
import { Container } from "semantic-ui-react";

class Parts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "Parts - WeFixIt";
    }

    render() {
        return (
            <Container>
                <span>Parts</span>
            </Container>
        );
    }
}

export default Parts;

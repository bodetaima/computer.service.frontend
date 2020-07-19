import { Component } from "react";
import { Grid } from "semantic-ui-react";
import SideBar from "../components/sidebar/SideBar";
import PartContainer from "../components/parts/PartContainer";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            parts: [],
        };
    }

    componentDidMount() {
        document.title = "WeFixIt";
        this.fetchTypes();
        this.fetchParts();
    }

    async fetchTypes() {
        await fetch("http://localhost:1025/api/types/frontend", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => {
                const types = res;
                this.setState({ types: types });
            })
            .catch(error => console.log(error));
    }

    async fetchParts() {
        await fetch("http://localhost:1025/api/parts/frontend", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => {
                const parts = res.parts;
                this.setState({ parts: parts });
            })
            .catch(error => console.log(error));
    }

    render() {
        const parts = this.state.parts.map(part => (
            <div className="flex">
                <PartContainer
                    className="flex-row"
                    key={part.id}
                    name={part.name}
                    type={part.type.name}
                    price={part.price}
                    description={part.description}
                />
            </div>
        ));

        return (
            <div className="flex">
                <SideBar className="flex-row" types={this.state.types} />
                <div className="flex-row">{parts}</div>
            </div>
        );
    }
}

export default Home;

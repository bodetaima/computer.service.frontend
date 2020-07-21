import { Component } from "react";
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
        await fetch("http://localhost:1025/api/parts/frontend?size=8", {
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
            <PartContainer
                key={part.id}
                name={part.name}
                type={part.type.name}
                price={part.price}
                description={part.description}
            />
        ));

        return (
            <>
                <div className="container">
                    <SideBar style={{ width: "10%" }} types={this.state.types} />
                    <div style={{ width: "89%", marginLeft: "1%" }}>
                        <h3 style={{ marginLeft: "1%" }}>SẢN PHẨM MỚI</h3>
                        <div className="flex">{parts}</div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;

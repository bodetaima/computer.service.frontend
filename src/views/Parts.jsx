import { Component } from "react";
import { connect } from "react-redux";
import { getParts } from "../store/actions";
import { Loader } from "semantic-ui-react";
import PartContainer from "../components/parts/PartContainer";

class Parts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { state } = this.props.location;
        document.title = state.name + " - WeFixIt";
        this.props.getParts(state.type, 24, 0, "");
    }

    render() {
        if (this.props.pending === true) {
            return <Loader active />;
        }
        const parts =
            this.props.parts.length > 0 ? (
                this.props.parts.map((part) => (
                    <PartContainer
                        key={part.id}
                        name={part.name}
                        type={part.type.name}
                        price={part.price}
                        description={part.description}
                    />
                ))
            ) : (
                <span>Không có linh kiện phù hợp!</span>
            );
        const { state } = this.props.location;

        return (
            <>
                <div className="container">
                    <div style={{ width: "89%", marginLeft: "1%" }}>
                        <h3 style={{ marginLeft: "1%" }}>{state.name}</h3>
                        <div className="flex">{parts}</div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pending: state.pending,
        parts: state.parts,
        size: state.size,
        page: state.page,
        totalPages: state.totalPages,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getParts: (type, size, page, sort) => dispatch(getParts(type, size, page, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Parts);

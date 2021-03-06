import { Component } from "react";
import SideBar from "../components/sidebar/SideBar";
import PartContainer from "../components/parts/PartContainer";
import { getPartTypes, getParts } from "../store/actions";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "WeFixIt";
        this.props.getPartTypes();
        this.props.getParts("", 8, 0, "");
    }

    render() {
        if (this.props.pending === true) {
            return <Loader active />;
        }
        const parts = this.props.parts.map((part) => (
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
                    <SideBar style={{ width: "10%" }} types={this.props.partTypes} />
                    <div style={{ width: "89%", marginLeft: "1%" }}>
                        <h3 style={{ marginLeft: "1%" }}>SẢN PHẨM MỚI</h3>
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
        partTypes: state.partTypes,
        parts: state.parts,
        size: state.size,
        page: state.page,
        totalPages: state.totalPages,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPartTypes: () => dispatch(getPartTypes()),
    getParts: (type, size, page, sort) => dispatch(getParts(type, size, page, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const PartContainer = props => {
    return (
        <div className="part-container">
            <span>{props.type}</span>
            <div className="container-header"><h4>{props.name}</h4></div>
            <div className="container-footer"><h2>{props.price.toLocaleString("vn-VN", { style: "currency", currency: "VND" })}</h2></div>
        </div>
    );
};

export default PartContainer;

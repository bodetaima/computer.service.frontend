import { Card, Icon } from "semantic-ui-react";

const PartContainer = props => {
    return (
        <Card
            header={props.name}
            meta={props.type}
            description={props.description}
            extra={props.price.toLocaleString("vn-VN", { style: "currency", currency: "VND" })}
        />
    );
};

export default PartContainer;

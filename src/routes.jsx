import { BrowserRouter as Router, Route } from "react-router-dom";
import Parts from "./views/Parts";
import Home from "./views/Home";

function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/parts" component={Parts} />
        </Router>
    );
}

export default Routes;

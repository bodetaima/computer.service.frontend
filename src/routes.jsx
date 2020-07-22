import { Switch, Route } from "react-router-dom";
import Parts from "./views/Parts";
import Home from "./views/Home";

function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/parts" component={Parts} />
        </Switch>
    );
}

export default Routes;

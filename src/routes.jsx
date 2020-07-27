import { Switch, Route } from "react-router-dom";
import Parts from "./views/Parts";
import Home from "./views/Home";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:type" component={Parts} />
        </Switch>
    );
}

export default Routes;

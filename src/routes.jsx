import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Segment, Loader, Image } from "semantic-ui-react";
import Parts from "./views/Parts";

const fallbackLoader = (
    <Segment>
        <Loader active />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
);

const Home = lazy(() => import("@/views/Home.jsx"));

function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={fallbackLoader}>
                        <Home />
                    </Suspense>
                </Route>
                <Route path="/parts">
                    <Suspense fallback={fallbackLoader}>
                        <Parts />
                    </Suspense>
                </Route>
            </Switch>
        </>
    );
}

export default Routes;

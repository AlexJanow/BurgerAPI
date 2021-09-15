import { Route, Switch } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Impressum } from "../pages/Impressum";

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/impressum" component={Impressum} />

                <Route component={Page404} />
            </Switch>
        </main>)
}

export default Main;
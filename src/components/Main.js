import { Route, Switch } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Impressum } from "../pages/Impressum";
import { SelectedBurger } from "../pages/SelectedBurger";

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/impressum" component={Impressum} />

                <Route path="/:id" component={SelectedBurger} />

                <Route component={Page404} />
            </Switch>
        </main>)
}

export default Main;
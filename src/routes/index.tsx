import { Switch, Route } from "react-router-dom";
import { Main } from "../pages/main";
import { AboutMe } from "../pages/about";
import { Portfolio, PortfolioSingle } from "../pages/portfolio";
import { NotFound } from "../pages/notFound";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={"/"} exact component={Main} />
            <Route path={"/about"} exact component={AboutMe} />
            <Route path={"/portfolio"} exact component={Portfolio} />
            <Route path={"/portfolio/:id"} exact component={PortfolioSingle} />
            <Route component={NotFound} />
        </Switch>
    );
};

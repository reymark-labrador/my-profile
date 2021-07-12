import { Switch, Route } from "react-router-dom";
import { Main } from "../pages/main";
import { AboutMe } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { NotFound } from "../pages/notFound";

export const Routes: React.FC = () => {
    const rootUrl = process.env.REACT_APP_ROOT_URL;

    return (
        <Switch>
            <Route path={rootUrl} exact component={Main} />
            <Route path={rootUrl + "/about"} exact component={AboutMe} />
            <Route path={rootUrl + "/portfolio"} exact component={Portfolio} />
            <Route component={NotFound} />
        </Switch>
    );
};

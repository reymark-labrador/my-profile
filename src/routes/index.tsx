import { Switch, Route } from "react-router-dom";
import App from "../App";
import {Main} from "../pages/main";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Main} />
            {/* <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFound} /> */}
        </Switch>
    );
};

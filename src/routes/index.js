import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import history from "../history";
import HomePage from "../pages/Home";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
            </Switch>
        </Router>
    )
}

export default Routes

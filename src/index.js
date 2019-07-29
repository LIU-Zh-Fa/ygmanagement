import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import {Provider} from 'react-redux'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import {noLayoutRouteComponent} from "@router"
import routeEach from '@utils/routeEach' 
const noLayoutRoute = routeEach(noLayoutRouteComponent);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {noLayoutRoute}
                <Route path="/" render={()=>{
                    return <App/>
                }}></Route>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

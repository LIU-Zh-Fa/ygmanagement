import React, { Component } from 'react'
import AuthRoute from '@components/AuthRoute'
import LayoutCom from '@layout'
import {Switch,Redirect} from "react-router-dom"
import {layoutRouteComponent} from '@router'
import routeEach from '@utils/routeEach'
const pageRoute = routeEach(layoutRouteComponent)
class App extends Component {
    render() {
        return (
            <Switch>
                <LayoutCom>
                    <Redirect from="/" to="/home" exact />
                    {pageRoute}
                </LayoutCom>
            </Switch>
        )
    }
}

export default AuthRoute(App)


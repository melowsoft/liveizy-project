import React, { Component } from 'react'
import { withStyles } from "@material-ui/core"

import { Switch, Route} from 'react-router-dom'

//routes
import routes from './DashboardRoutes'

import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

//styles
import styles from './styles'

const switchRoutes = (
    <Switch>
        {routes.map((prop, index) => {
            if(prop.layout === '/admin') {
                return (
                    <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={index} 
                    />
                )
            }
        })}
    </Switch>
)

class Control extends Component {

    render(){
        const { classes} = this.props;
        return (
            <div className={classes.mainWrapper}>
                <div className={classes.tabContainer}>
                    <Sidebar />
                </div>
                <div className={classes.content}>
                    <Header />
                    <div className={classes.map}>{switchRoutes}</div>
                </div>
            </div>
        )
    }
 
}



export default withStyles(styles)(Control)
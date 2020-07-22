import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

//styles
import styles from './DashboardStyles'


class Dashboard extends Component {
    render(){
        const { classes } = this.props
        return(
            <>
                <div className={classes.pageTitle}>
                    <h1>
                        My Properties
                    </h1>

                    <div className={classes.filterFlex}>
                        <div>
                            filter here
                        </div>

                        <div>
                            <button>
                                New Property
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Dashboard)
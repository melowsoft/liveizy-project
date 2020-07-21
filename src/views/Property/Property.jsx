import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'


//styles
import styles from './PropertyStyles'
import { classes } from 'istanbul-lib-coverage'

import PropertyTable from '../../components/PropertyTable/PropertyTable'
import NewProperty from '../../components/NewProperty/NewProperty'




class Property extends Component {
    state = {
        currentTab: 'newProperty'
    }

    changeCurrentTabHandler = (tab) => {
        this.setState({
            currentTab: tab
        })
    }

    render(){
        const { classes } = this.props
        const { currentTab } = this.state

        return(
            <>
                <div className={classes.pageTitle}>
                    <h1 className={classes.title}>
                        My Properties
                    </h1>

                   {currentTab === 'propertyTable' && <PropertyTable newProperty={this.changeCurrentTabHandler}/>}

                  <NewProperty currentTab={currentTab}/>

                </div>
            </>
        )
    }
}

export default withStyles(styles)(Property)
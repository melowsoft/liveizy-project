import React, { Component } from 'react'
import {withStyles} from '@material-ui/core'

import styles from './HeaderStyle'

import Notification from '../../assets/images/notification.svg'
import User from '../../assets/images/user.png'



class Header extends Component {
    render(){
        const {classes} = this.props
        return (
            <div className={classes.header}>
                <div className={classes.leftItem}>
                    <div className={classes.hrWrapper}>
                        <hr className={classes.hrFirst}/>
                        <hr className={classes.hrSecond}/>
                        <hr className={classes.hrThird}/>
                    </div>
                    <div className={classes.topTitle}>
                        PROPERTY
                    </div>
                </div>

                <div className={classes.rightItem}>
                    <div className={classes.notificationIcon}>
                      <img src={Notification} alt="icon"/>
                    </div>

                    <div className={classes.userFlex}>
                        <div className={classes.userIconCon}>
                           <img src={User} alt="user" className={classes.user}/>
                           <div className={classes.activeIndicator}>

                           </div>
                        </div>
                        <div>
                        Kelechi
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
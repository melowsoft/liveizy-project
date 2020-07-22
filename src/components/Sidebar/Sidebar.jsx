import React, { Component } from 'react'
import { withStyles } from "@material-ui/core"
import classnames from 'classnames'

import Logo from '../../assets/images/liveizy-logo-white.png'
import Avatar from "../../assets/images/default-avatar.png"
import { DashboardOutlined,HomeOutlined,AccountBalanceWalletOutlined,PortraitOutlined,DescriptionOutlined, SupervisedUserCircleOutlined, MessageOutlined} from "@material-ui/icons"



import styles from './SidebarStyles'


class Sidebar extends Component {
    render(){
        const { classes } = this.props
        return(
            <div className={classes.sidebarWrapper}>
                <div className={classes.sidebarContentFlex}>
                    <div className={classes.logoWrapper}>
                        <img src={Logo} alt="logo" className={classes.logo}/>
                    </div>

                    <div className={((classes.profileWrapper))}>
                        <img src={Avatar} alt="avatar" className={classes.avatar}/>
                            <p className={classes.fullName}>oleka kelechi</p>
                            <p className={classes.userId}>UvBa1591</p>
                    </div>
                
                    <div className={classes.linksSections}>
                        <div className={classes.linksFlex}>
                            <div className={classes.linkButtonFlex}>
                                <DashboardOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Dashboard</p>
                            </div>
                            
                            <div className={classnames((classes.linkButtonFlex2), (classes.activeTab))}>
                                <div className={classes.propertyTab}>
                                <HomeOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Properties</p>
                                </div>

                                <div>
                                    <div className={classes.subTabs}>
                                        All property
                                    </div>
                                   <div className={classes.subTabs}>
                                   Property Package
                                   </div>
                                </div>
                            </div>
                            <div className={classes.linkButtonFlex}>
                                <AccountBalanceWalletOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Wallet</p>
                            </div>
                            <div className={classes.linkButtonFlex}>
                                <DescriptionOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Applications</p>
                            </div>
                            <div className={classes.linkButtonFlex}>
                                <PortraitOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Lpms</p>
                            </div>
                            <div className={classes.linkButtonFlex}>
                                <SupervisedUserCircleOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Income</p>
                            </div>
                            <div className={classes.linkButtonFlex}>
                                <SupervisedUserCircleOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Tenants</p>
                            </div>
                            <div className={classes.linkButtonFlex}>
                                <MessageOutlined className={classes.icon}/>
                                <p className={classes.LinkName}>Message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar);
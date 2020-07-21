import React from 'react'
import { withStyles } from '@material-ui/core'
import classnames from 'classnames'

import Settings from '../../assets/images/settings.svg'
import Owner from '../../assets/images/owner.svg'
import Edit from '../../assets/images/edit.svg'
import Bin from '../../assets/images/bin.svg'

import styles from './PropertyTableStyles'

const PropertyTable = ({classes, newProperty}) => {
    return (
        <>
         <div className={classes.filterFlex}>
                        <div className={classes.tableFilter}>
                           <div className={classnames((classes.filterButton), (classes.activeFilter))}>
                               All
                           </div>

                           <div className={classes.filterButton}>
                               Active
                           </div>

                           <div className={classes.filterButton}>
                               Vacant
                           </div>
                           
                           <div className={classes.filterButton}>
                               Draft
                           </div>
                        </div>

                        <div>
                            <button className={classes.button} onClick={newProperty}>
                               <sapn className={classes.plus}>+</sapn> New Property
                            </button>
                        </div>
                    </div>

                    <div className={classes.table}>
                        <div className={classes.tableHeader}>
                            <div className={classes.headerItem}>
                                Property Id
                            </div>

                            <div className={classes.headerItem2}>
                                Location
                            </div>

                            <div className={classes.headerItem}>
                                Total Rent
                            </div>

                            <div className={classes.headerItem2}>
                                Open Maintenance
                            </div>

                            <div className={classes.headerItem}>
                                Tennants
                            </div>
                            <div className={classes.headerItem}>
                            
                            </div>
                        </div>
                        <div className={classes.tableBody}>
                            <div className={classes.bodyItem}>
                               577-899
                            </div>

                            <div className={classes.bodyItem2}>
                                NO.3 CHERVON DRIVE
                            </div>

                            <div className={classes.bodyItem}>
                                200,000
                            </div>

                            <div className={classes.bodyItem2}>
                                <div>
                                    <div className={classes.maintenance}>
                                        <img src={Settings} alt="icon" className={classes.icon}/>
                                        <div>1</div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.bodyItem}>
                            <div>
                                  <div className={classes.maintenance}>
                                        <img src={Owner} alt="icon" className={classes.icon}/>
                                        <div>3</div>
                                    </div>
                            </div>
                            </div>
                            <div className={classes.bodyItem}>
                            <div>
                                  <div className={classes.actionFlex}>
                                        <img src={Edit} alt="icon" className={classes.icon}/>
                                        <img src={Bin} alt="icon" className={classes.icon}/>  
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className={classes.tableBody}>
                            <div className={classes.bodyItem}>
                               577-899
                            </div>

                            <div className={classes.bodyItem2}>
                                NO.3 CHERVON DRIVE
                            </div>

                            <div className={classes.bodyItem}>
                                200,000
                            </div>

                            <div className={classes.bodyItem2}>
                            <div>
                                    <div className={classes.maintenance}>
                                        <img src={Settings} alt="icon" className={classes.icon}/>
                                        <div>1</div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.bodyItem}>
                            <div>
                                  <div className={classes.maintenance}>
                                        <img src={Owner} alt="icon" className={classes.icon}/>
                                        <div>3</div>
                                    </div>
                            </div>
                            </div>
                            <div className={classes.bodyItem}>
                            <div>
                                  <div className={classes.actionFlex}>
                                        <img src={Edit} alt="icon" className={classes.icon}/>
                                        <img src={Bin} alt="icon" className={classes.icon}/>  
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className={classes.tableBody}>
                            <div className={classes.bodyItem}>
                               577-899
                            </div>

                            <div className={classes.bodyItem2}>
                                NO.3 CHERVON DRIVE
                            </div>

                            <div className={classes.bodyItem}>
                                200,000
                            </div>

                            <div className={classes.bodyItem2}>
                            <div>
                                    <div className={classes.maintenance}>
                                        <img src={Settings} alt="icon" className={classes.icon}/>
                                        <div>1</div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.bodyItem}>
                            <div>
                                  <div className={classes.maintenance}>
                                        <img src={Owner} alt="icon" className={classes.icon}/>
                                        <div>3</div>
                                    </div>
                            </div>
                            </div>
                            <div className={classes.bodyItem}>
                            <div>
                                  <div className={classes.actionFlex}>
                                        <img src={Edit} alt="icon" className={classes.icon}/>
                                        <img src={Bin} alt="icon" className={classes.icon}/>  
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default withStyles(styles)(PropertyTable);

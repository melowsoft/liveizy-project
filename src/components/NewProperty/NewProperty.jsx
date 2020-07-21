import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import styles from './NewPropertyStyles'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'

import Home from '../../assets/images/home-run.svg'
import Accept from '../../assets/images/accept.svg'
import User from '../../assets/images/userIcon.svg'

class NewProperty extends Component {
    render(){
        const { classes, currentTab } = this.props
        
        return (
            <>
                {currentTab === 'newProperty' && 
                (
                    <div className={classes.mainWrapper}>
                        <div className={classes.header}>
                            <h5 className={classes.pageTitle}>Property Details</h5>
                        </div>

                        <div className={classes.content}>
                            <div className={classes.relative}> 
                        
                            <div className={classes.iconAnchor}>
                                <div className={classes.anchorItem}>
                                    <div className={classes.iconCircle}>
                                   <img src={Home} alt="icon" className={classes.iconImg}/>
                                    </div>
                                        <div>
                                              NO.3 CHERVON DRIVE
                                        </div>
                                </div>
                                <div className={classes.anchorItem}>
                                    <div className={classes.iconCircle}>

                                <img src={Accept} alt="icon" className={classes.iconImg}/>
                                    </div>
                                </div>
                                <div className={classes.anchorItem}>
                                    <div className={classes.iconCircle}>

                                <img src={User} alt="icon" className={classes.iconImg}/>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <GridContainer className={classes.propertyContainer}>
                                <GridItem md={5}>
                                    <h3 className={classes.createProperty}>Create Property</h3>
                                   <div className={classes.coverImageFrame}>
                                        <div className={classes.imageArea}>

                                        </div>
                                        <div className={classes.addCover}>
                                            Add Cover Image
                                        </div>
                                   </div>
                                </GridItem>

                                <GridItem md={7} className={classes.formSection}>
                                  <GridContainer>
                                      <GridItem md={12} className={classes.formItem}>
                                        <p>Select Payment Frequency</p>
                                            <select className={classes.selectFrequency}>
                                      
                                            <option value="select">Select Unit</option>
                                            <option value="monthly">monthly</option>
                                            <option value="Annualy">Annualy</option>

                                            </select>
                                      </GridItem>
                                      
                                      <GridItem md={4} className={classes.formItem}>
                                      <p>Apartment Details</p>
                                            <input type="text" placeholder="e.g. Suite 101" className={classes.input}/>
                                      </GridItem>
                                      <GridItem md={8} className={classes.formItem}>
                                      <p>Select Payment Frequency</p>
                                            <input type="text" className={classes.input}/>
                                      </GridItem>

                                      <GridItem md={4} className={classes.formItem}>
                                      <p>Rent</p>
                                            <input type="text" placeholder="100,000" className={classes.input}/>
                                      </GridItem>

                                      <GridItem md={4} className={classes.formItem}>
                                      <p>Apartment Floor</p>
                                            <input type="text" placeholder="2nd Floor" className={classes.input}/>
                                      </GridItem>

                                      <GridItem md={4} className={classes.formItem}>
                                      <p>Entrance</p>
                                            <input type="text" placeholder="4" className={classes.input}/>
                                      </GridItem>

                                      <GridItem md={12} className={classes.formItem}>
                                        <p>Availability of Property</p>
                                            <select className={classes.selectFrequency}>
                                      
                                            <option value="select">Select Uoptionnit</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>

                                            </select>
                                      </GridItem>

                                      <GridItem md={12}>
                                            <GridContainer>
                                                <GridItem md={6}>
                                                    <GridContainer>
                                                    <GridItem className={classes.formItem}>
                                                        <p>Add schedule dates</p>
                                                                <input type="text" placeholder="select date" className={classes.input}/>
                                                        </GridItem>
                                                    <GridItem className={classes.formItem}>
                                                        <p>select Time</p>
                                                                <input type="text" placeholder="select time" className={classes.input}/>
                                                        </GridItem>
                                                    </GridContainer>
                                                </GridItem>
                                                <GridItem md={6} className={classes.scheduleDateWrapper}>
                                                    <div className={classes.scheduleDate}>
                                                        <div className={classes.scheduleTitle}>
                                                        Schedule Date
                                                        </div>
                                                    </div>
                                                </GridItem>
                                            </GridContainer>
                                      </GridItem>
                                  </GridContainer>
                                </GridItem>
                            </GridContainer>

                            <div className={classes.buttonsWrapper}>
                                <button className={classes.back}>
                                    Back
                                </button>

                                <button className={classes.next}>
                                    Next
                                </button>
                            </div>

                        </div>
                    </div>
                )
            }
            </>
        )
    }
}

export default withStyles(styles)(NewProperty);
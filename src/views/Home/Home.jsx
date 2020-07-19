import React, { Component } from 'react'
import {withStyles} from "@material-ui/core"

//Components
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"

//Assets
import Logo from "../../assets/images/liveizy-logo-1.png"
import LogoSmall from "../../assets/images/liveizy-logo-small.png"
import Quote from "../../assets/images/quote.svg"


//Component styles
import styles from "./HomeStyles"

class Home extends Component {
    render(){
        const {classes} = this.props
        return(
            <div className="home">
                <GridContainer className={classes.mainContainer}>
                    <GridItem md={4} className={classes.imageSection}>
                        <div className={classes.opacity}>
                        
                        </div>
                        <div className={classes.quoteBox}>
                        <div className={classes.quoteSign}>
                                       <img src={Quote} alt="quote" className={classes.quoteIcon}/>
                                </div>
                            <div className={classes.triangle}>
                                
                            </div>
                           <div className={classes.quoteTextFlex}>
                                <p className={classes.quote}>Our job is to granty you peace of mind when it comes to choosing an apartment as 
                                    a tenant or as landlord looking for the right tenant .</p>
                                 <div className={classes.quoteBottomFlex}>
                                     <div>
                                     <h4 className={classes.author}>
                                     Tochi Adesanya
                                     </h4>
                                     <p className={classes.position}>
                                     CEO & Co-founder Liveizy
                                     </p>

                                     </div>
                                     <div>
                                         <img src={LogoSmall} alt="logo" className={classes.smallLogo}/>
                                     </div>
                                </div>   
                           </div>
                        </div>
                       
                    </GridItem>
                    <GridItem md={8} className={classes.formSection}>
                        <div className={classes.formWrapper}>
                            <div className={classes.logoContainer}>
                                <img src={Logo} alt="logo" className={classes.logo}/>
                            </div>

                            <div className={classes.pageHeader}>
                                <h1 className={classes.pageHeading}>Create your free Account</h1>
                                <p className={classes.alt}>Already have an account? <sapn className={classes.link}>Log in</sapn></p>
                            </div>

                            <GridContainer>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Full Name</p>
                                        <input type="text" placeholder="Your First Name" className={classes.input}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Email Address</p>
                                        <input type="text" placeholder="Your Email Address" className={classes.input}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Create Password</p>
                                        <input type="text" placeholder="Type Your Password" className={classes.input}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Confirm Password</p>
                                        <input type="text" placeholder="Re-type Your Password" className={classes.input}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Referral</p>
                                        <input type="text" placeholder="Your Referral" className={classes.input}/>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <div className={classes.buttonWrapper}>
                                <button className={classes.button}>
                                    Create Account
                                </button>
                            </div>

                            <div className={classes.termsWrapper}>
                                <p className={classes.terms}>
                                By signing up, you are agreeing to <span className={classes.liveizyTerms}>Liveizy <br />Terms & Conditions</span>
                                </p>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(styles)(Home);
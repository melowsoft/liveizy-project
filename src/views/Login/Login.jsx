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
import styles from "./LoginStyles"

class Login extends Component {
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
                                <h1 className={classes.pageHeading}>LOGIN</h1>
                            </div>

                            <GridContainer>
                                <GridItem md={8}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Email Address</p>
                                        <input type="text" placeholder="Your Email Address" className={classes.input}/>
                                    </div>
                                </GridItem>
                                <GridItem md={8}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Create Password</p>
                                        <input type="text" placeholder="Type Your Password" className={classes.input}/>
                                    </div>
                                    <div className={classes.forgetPassword}>
                                        Forget Password?
                                    </div>
                                </GridItem>
    
                            </GridContainer>

                            <div className={classes.buttonWrapper}>
                                <button className={classes.button}>
                                    Login
                                </button>
                            </div>

                            <div className={classes.termsWrapper}>
                                <p className={classes.terms}>
                                Need a Liveizy account? <span className={classes.liveizyTerms}>Create an account</span>
                                </p>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(styles)(Login);
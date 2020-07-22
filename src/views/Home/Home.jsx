import React, { Component } from 'react'
import {withStyles, Hidden} from "@material-ui/core"
import { Link } from 'react-router-dom'

//Components
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"

//Assets
import Logo from "../../assets/images/liveizy-logo-1.png"
import LogoSmall from "../../assets/images/liveizy-logo-small.png"
import Quote from "../../assets/images/quote.svg"


//Component styles
import styles from "./HomeStyles"
import PageLoader from '../../components/PageLoader/PageLoader'

class Home extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        auth: this.props.auth,
        serverError: null,
        loading: false
    }

    static getDerivedStateFromProps(props, state){
        if (props.auth.signedUpDetails !== state.auth.signedUpDetails) {
            const {signedUpDetails} = props.auth
            if(!signedUpDetails.data.status) {
                return {
                  serverError: signedUpDetails.data.message,
                  loading: false                  
                }
             } else {
               props.history.push('signup-success');
             }
          }
          return null;        
       }

    onInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    
      }

      onCreateHandler = () => {
        this.setState({
            serverError: null
        })
          const {signupUser} = this.props
          const {firstName, lastName, email, password, confirmPassword, phoneNumber} = this.state

          if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && confirmPassword !== ''){
            
            if (password === confirmPassword){

                const deatils = {
                    firstName,
                     lastName,
                      email,
                      phoneNumber,
                      password 
                 }  
                 this.setState({
                     loading: true
                 })
               return  signupUser(deatils)                    
            }
           
          }
          return;
      }

    render(){
        const {classes} = this.props
        const  { firstName, email, password, confirmPassword, phoneNumber, lastName, serverError, loading } = this.state
        return(
            <div className="home">
                {loading && <PageLoader />}
                <GridContainer className={classes.mainContainer}>
                    <GridItem md={4} className={classes.imageSection}>
                        <div className={classes.opacity}>
                        
                        </div>

                        <Hidden smDown>
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
                        </Hidden>
                    </GridItem>
                    <GridItem md={8} className={classes.formSection}>
                        <div className={classes.formWrapper}>
                            <div className={classes.logoContainer}>
                                <img src={Logo} alt="logo" className={classes.logo}/>
                            </div>

                            <div className={classes.pageHeader}>
                                <h1 className={classes.pageHeading}>Create your free Account</h1>
                                <p className={classes.alt}>Already have an account? <Link to="/login"><sapn className={classes.link}>Log in</sapn></Link></p>
                            </div>

                            <GridContainer>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>First Name</p>
                                        <input type="text" placeholder="Your First Name" className={classes.input} name="firstName" value={firstName} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Last Name</p>
                                        <input type="text" placeholder="Your Last Name" className={classes.input} name="lastName" value={lastName} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Email Address</p>
                                        <input type="text" placeholder="Your Email Address" className={classes.input} name="email" value={email} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Phone Number</p>
                                        <input type="text" placeholder="Your Phone Number" className={classes.input} name="phoneNumber" value={phoneNumber} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Create Password</p>
                                        <input type="password" placeholder="Type Your Password" className={classes.input} name="password" value={password} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                <GridItem md={6}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Confirm Password</p>
                                        <input type="password" placeholder="Re-type Your Password" className={classes.input} name="confirmPassword" value={confirmPassword} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                {serverError && <GridItem>
                                    <div className="server-error">
                                    <p>Kindly fix the errors</p>
                                    <p>{serverError}</p>
                                    </div>
                                </GridItem>}
                            </GridContainer>

                            <div className={classes.buttonWrapper}>
                                <button className={classes.button} onClick={this.onCreateHandler}>
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
import React, { Component } from 'react'
import {withStyles, Hidden} from "@material-ui/core"
import { Link } from 'react-router-dom'

//Components
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import PageLoader from '../../components/PageLoader/PageLoader'

//Assets
import Logo from "../../assets/images/liveizy-logo-1.png"
import LogoSmall from "../../assets/images/liveizy-logo-small.png"
import Quote from "../../assets/images/quote.svg"


//Component styles
import styles from "./LoginStyles"

class Login extends Component {

    state = {
        email: '',
        password: '',
        auth: this.props.auth,
        serverError: null,
        loading: false
    }

    static getDerivedStateFromProps(props, state){
        if (props.auth.loginDetails !== state.auth.loginDetails) {
            const {loginDetails} = props.auth
            if(!loginDetails.status) {
                return {
                  serverError: loginDetails.message,
                  loading: false           
                }
             } else {
               props.history.push('/admin/property');
             }
          }
          return null;        
       }

    onInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    
      }

      onLoginHandler = () => {
        this.setState({
            serverError: null
        })

          const {loginUser} = this.props
          const { email, password } = this.state

          if(email !== '' && password !== '') {
            this.setState({
                loading: true
            })
            return  loginUser({email, password})
          }
      }

    render(){
        const {email, password, loading, serverError} = this.state
        const {classes} = this.props
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
                                <h1 className={classes.pageHeading}>LOGIN</h1>
                            </div>

                            <GridContainer>
                                <GridItem md={8}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Email Address</p>
                                        <input type="text" placeholder="Your Email Address" className={classes.input} name="email" value={email} onChange={this.onInputChange}/>
                                    </div>
                                </GridItem>
                                <GridItem md={8}>
                                    <div className={classes.inputItem}>
                                        <p className={classes.label}>Create Password</p>
                                        <input type="password" placeholder="Type Your Password" className={classes.input} name="password" value={password} onChange={this.onInputChange}/>
                                    </div>
                                    <div className={classes.forgetPassword}>
                                        Forget Password?
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
                                <button className={classes.button} onClick={this.onLoginHandler}>
                                    Login
                                </button>
                            </div>

                            <div className={classes.termsWrapper}>
                                <p className={classes.terms}>
                                Need a Liveizy account? <Link to="/"><span className={classes.liveizyTerms}>Create an account</span></Link>
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
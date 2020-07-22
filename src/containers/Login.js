import {connect} from "react-redux"
import LoginComponent from "../views/Login/Login";

//import actions
import { loginUser } from '../actions/action_auth'

//binding states to component
const mapStateToProps = state => ({
    auth: state.auth
});

//binding actions to component
const mapDispatchToProps = dispatch => ({
    loginUser: (details) => dispatch(loginUser(details))
});

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default Login;
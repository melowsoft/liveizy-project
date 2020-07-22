import {connect} from "react-redux"
import RegisterComponent from "../views/Home/Home";

//import actions
import { signupUser } from '../actions/action_auth'

//binding states to component
const mapStateToProps = state => ({
    auth: state.auth
});

//binding actions to component
const mapDispatchToProps = dispatch => ({
    signupUser: (details) => dispatch(signupUser(details))
});

const Register = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterComponent);

export default Register;
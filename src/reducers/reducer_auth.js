import { SIGNUP_USER, USER_LOADING, LOGIN_USER } from "../actions/action_auth"

const initialState = {
    loading: false,
    signedUpDetails: null,
    loginDetails: null
}

const auth = (state = initialState, action) => {

    let data;
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
                  };
        case SIGNUP_USER:
        data = action.payload.data
        return {...state, signedUpDetails: data, loading: false} 
        case LOGIN_USER:
        data = action.payload.data
        return {...state, loginDetails: data, loading: false} 
        default:
            return {
                ...state,
            };   
    }
}

export default auth;
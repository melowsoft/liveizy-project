import axios from 'axios'

//helper function for local storage
import { addToLocalStorage } from '../helpers/browserStorage';

//backend base url
const BACKEND_URL = "https://liveizy2.azurewebsites.net/api";

export const USER_LOADING = "USER_LOADING";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_USER = "LOGIN_USER";

export function userLoading() {
    return {
        type: USER_LOADING,
    }
}
export function loadNewUserData(result) {
    return {
        type: SIGNUP_USER,
        payload: result
    }
}

export function signupUser(details) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/register`, details);
            dispatch(loadNewUserData(response))
        } catch (error) {
            dispatch(loadNewUserData({
                success: false,
                message: error,
            }))
        }
    }
}
export function loadLoginData(result) {
    return {
        type: LOGIN_USER,
        payload: result
    }
}

export function loginUser(details) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/login`, details);
            if(response.data.status){
                const {token} = response.data
                addToLocalStorage('token', token);
            }
            dispatch(loadLoginData(response))
        } catch (error) {
            console.log(error, "checking error")
            dispatch(loadLoginData({
                success: false,
                message: error,
            }))
        }
    }
}


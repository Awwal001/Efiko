import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../actions/types';

const initialState = {
    isAuthenticated: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case DELETE_USER_FAIL:
            return state
        default:
            return state
    };
};






// import axiosInstance from '../axios';
// import {
    // LOGIN_SUCCESS,
    // LOGIN_FAIL,
    // // USER_LOADED_SUCCESS,
    // // USER_LOADED_FAIL,
    // // AUTHENTICATED_SUCCESS,
    // // AUTHENTICATED_FAIL,
    // // PASSWORD_RESET_SUCCESS,
    // // PASSWORD_RESET_FAIL,
    // // PASSWORD_RESET_CONFIRM_SUCCESS,
    // // PASSWORD_RESET_CONFIRM_FAIL,
    // SIGNUP_SUCCESS,
    // SIGNUP_FAIL,
    // // ACTIVATION_SUCCESS,
    // // ACTIVATION_FAIL,
    // // GOOGLE_AUTH_SUCCESS,
    // // GOOGLE_AUTH_FAIL,
    // // FACEBOOK_AUTH_SUCCESS,
    // // FACEBOOK_AUTH_FAIL,
    // LOGOUT
// } from '../actions/types';

// const initialState = {
    // access: localStorage.getItem('access'),
    // refresh: localStorage.getItem('refresh'),
    // isAuthenticated: null,
    // user: null
// };

// export default function(state = initialState, action) {
    // const { type, payload } = action;

    // switch(type) {
        // // case AUTHENTICATED_SUCCESS:
            // // return {
                // // ...state,
                // // isAuthenticated: true
            // // }
        // case LOGIN_SUCCESS:
        // // case GOOGLE_AUTH_SUCCESS:
        // // case FACEBOOK_AUTH_SUCCESS:
            // localStorage.setItem('access', payload.access);
            // localStorage.setItem('refresh', payload.refresh);
            // return {
                // ...state,
                // isAuthenticated: true,
                // access: payload.access,
                // refresh: payload.refresh
            // }
        // case SIGNUP_SUCCESS:
            // return {
                // ...state,
                // isAuthenticated: false
            // }
        // // case USER_LOADED_SUCCESS:
            // // return {
                // // ...state,
                // // user: payload
            // // }
        // // case AUTHENTICATED_FAIL:
            // // return {
                // // ...state,
                // // isAuthenticated: false
            // // }
        // // case USER_LOADED_FAIL:
            // // return {
                // // ...state,
                // // user: null
            // // }
        // // case GOOGLE_AUTH_FAIL:
        // // case FACEBOOK_AUTH_FAIL:
        // case LOGIN_FAIL:
        // case SIGNUP_FAIL:
        // case LOGOUT:
            // localStorage.removeItem('access');
            // localStorage.removeItem('refresh');
			// axiosInstance.defaults.headers['Authorization'] = null;
			// history.push('/login');
            // return {
                // ...state,
                // access: null,
                // refresh: null,
                // isAuthenticated: false,
                // user: null
            // }
        // // case PASSWORD_RESET_SUCCESS:
        // // case PASSWORD_RESET_FAIL:
        // // case PASSWORD_RESET_CONFIRM_SUCCESS:
        // // case PASSWORD_RESET_CONFIRM_FAIL:
        // // case ACTIVATION_SUCCESS:
        // // case ACTIVATION_FAIL:
            // // return {
                // // ...state
            // // }
        // default:
            // return state
    // }
// };


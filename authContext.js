import createDataContext from './createDataContext';
import trackingApi from '../api/trackingApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {navigate} from '../navigationRef';

const authReducer = (state , action) => {
    switch (action.type) {
            case 'add_error':
                return {...state, errorMessage: action.payload};
            
            case 'signedUp':
                return {errorMessage: '', token: action.payload};

            case 'signedIn':
                return {errorMessage: '', token: action.payload}; 

            case 'signOut':
                return {token: null, errorMessage: ''}
                
            case 'clear_error_message':
                return {...state, errorMessage: ''};
            
        default:
        return state;
    }
};

const testLocalSignUp = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
        dispatch({type: 'signedUp' , payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const testLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
        dispatch({type: 'signedIn' , payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signUp = (dispatch) => {
    return async ({email, password}) => {
        // make api request to sign up.
        // if we sign up, modify our state and produce authentication.
        // if sign up fails, reflect error message.

        try {
            const response = await trackingApi.post('/signup' , {email, password});
            await AsyncStorage.setItem('token' , response.data.token);
            dispatch({type: 'signedUp' , payload: response.data.token});

            navigate('TrackList');

        } catch (err) {
            dispatch({type: 'add_error' , payload: 'Something went wrong with Sign Up'})
        }

    };
};

const signIn = (dispatch) => {
    return async ({email, password}) => {
        // Try to sign in.
        // Handle success by updating state.
        // Handle failure by showing error message.

        try {
            const response = await trackingApi.post('/signin' , {email, password});
            await AsyncStorage.setItem('token' , response.data.token);
            dispatch({type: 'signedIn' , payload: response.data.token});

            navigate('TrackList');

        } catch (err) {
            dispatch({type: 'add_error' , payload: 'Something went wrong with Sign In'});
        }

    };
};

const signOut = (dispatch) => {
    return async () => {
        // somehow sign out.

        await AsyncStorage.removeItem('token');
        dispatch({type: 'signOut'});

        navigate('loginFlow');
    }
};


export const {Context, Provider} = createDataContext(
    authReducer,
    {signUp, signIn, signOut, clearErrorMessage, testLocalSignIn, testLocalSignUp},
    {token: null , errorMessage: ''}
)
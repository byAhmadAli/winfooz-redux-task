import { LOGIN_USER, USER_WAIT } from '../reducers/userReducer';

export const loginUser = state => ({
    type: LOGIN_USER,
    payload: {
        isLoading: false,
        user: state
    }
})

export const userWait = state => ({
    type: USER_WAIT,
    payload: {
        isLoading: true
    }
})
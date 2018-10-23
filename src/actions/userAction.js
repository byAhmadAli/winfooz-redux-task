import { LOGIN_USER } from '../reducers/userReducer';

export const loginUser = state =>({
    type: LOGIN_USER,
    payload: state
})
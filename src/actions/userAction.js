import { USER_ATTEMPT } from '../reducers/userReducer';

export const userLogin = state => ({
    type: USER_ATTEMPT,
    payload: state
})
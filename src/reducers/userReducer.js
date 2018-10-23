export const LOGIN_USER = 'user:login';

export function userReducer(state, action){
    switch (action.type) {
        case LOGIN_USER:
            return action.payload
        default:
            return state
    }
}
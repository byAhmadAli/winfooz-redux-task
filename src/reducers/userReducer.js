export const LOGIN_USER = 'user:login';
export const USER_WAIT = 'user:wait';

export function userReducer(state, action){
    switch (action.type) {
        case LOGIN_USER:
            if(action.payload.user.password){
                return {
                    isLoading: action.payload.isLoading,
                    user: {
                        username: action.payload.user.username
                    }
                };
            }
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        case USER_WAIT:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
}
const initialState = {
    user: null
}

export const USER_ATTEMPT = 'user:attempt';

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case USER_ATTEMPT:
            return action.payload;
        default:
            return state;
    }
}
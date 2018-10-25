
const initialState = {
    isLoading: false
}

export const REQUEST = 'request';
export const REQUEST_SUCCESS = 'request:success';
export const REQUEST_FAILURE = 'request:failure';

export const requestReducer = (state = initialState, action) =>{
    switch (action.type) {
        case REQUEST:
            return  true;
        case REQUEST_SUCCESS:
            return false;
        case REQUEST_FAILURE:
            return false;
        default:
            return state;
    }
}
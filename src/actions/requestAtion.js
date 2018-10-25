import { REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE } from '../reducers/requestReducer';

export const request = () => ({
    type: REQUEST
})

export const requestSuccess = () => ({
    type: REQUEST_SUCCESS
})

export const requestFailure = () => ({
    type: REQUEST_FAILURE
})
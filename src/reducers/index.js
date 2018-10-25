import { combineReducers } from 'redux'
import { requestReducer } from './requestReducer'
import { userReducer } from './userReducer'

export default combineReducers({
    isLoading: requestReducer,
    user: userReducer
})
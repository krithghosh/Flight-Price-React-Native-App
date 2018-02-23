import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import livePriceReducer from '../app/reducers/livePrice'

const reducers = combineReducers({
    livePrice: livePriceReducer
})

export default createStore(reducers, applyMiddleware(thunk))
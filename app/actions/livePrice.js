import {FETCH_LIVE_PRICE, 
        FETCH_MORE_LIVE_PRICE, 
        NETWORK_ERROR, 
        SHOW_LOADER } from '../constants'
import { getLivePrices } from '../repository/restApiService'

// Action Creators
export const showLoader = () => ({type: SHOW_LOADER, payload: ''})
export const storeLivePrices = (data) => ({type: FETCH_LIVE_PRICE, payload: data})
export const loadMoreLivePrices = () => ({type: FETCH_MORE_LIVE_PRICE, payload: ''})
export const networkError = (error) => ({type: NETWORK_ERROR, payload: error})

// Actions
export const fetchLivePrices = () => {
    return (dispatch) => {
        dispatch(showLoader())
        const sessionUrl = getLivePrices()
            .then(data => dispatch(storeLivePrices(data)))
            .catch(error => {
                console.log(error.message)
                dispatch(networkError(error.message))})
    }
}

export const fetchMoreLivePrices = () => {
    return (dispatch) => {
        dispatch(loadMoreLivePrices())
    }
}
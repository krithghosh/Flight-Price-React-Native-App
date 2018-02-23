import {FETCH_LIVE_PRICE, 
        FETCH_MORE_LIVE_PRICE, 
        DEFAULT_SIZE, 
        SHOW_LOADER, 
        NETWORK_ERROR } from '../constants'

const initState = {
    pStart: 0,
    pEnd: DEFAULT_SIZE,
    allItineraries: [],
    itineraries: [],
    legs: [],
    segments: [],
    carriers: [],
    agents: [],
    places: [],
    currencies: [],
    networkError: false,
    errorMessage: '',
    isLoading: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {...state, isLoading: true, networkError: false, errorMessage: ''}

        case FETCH_LIVE_PRICE:
            let body = JSON.parse(action.payload._bodyInit)

            return {...state, allItineraries: body.Itineraries, 
                    itineraries: body.Itineraries.slice(state.pStart, state.pEnd), legs: body.Legs, 
                    segments: body.Segments, carriers: body.Carriers, agents: body.Agents, 
                    places: body.Places, currencies: body.Currencies, isLoading: false, 
                    networkError: false, errorMessage: ''}

        case FETCH_MORE_LIVE_PRICE:
            if(state.pEnd > state.allItineraries.length) return state
            state.pStart = state.pEnd
            state.pEnd = state.pEnd + DEFAULT_SIZE
            var tempList = []
            tempList = state.allItineraries.slice(state.pStart, state.pEnd)
            var oldList = []
            oldList = state.itineraries
            oldList = oldList.concat(tempList)

            return {...state, itineraries: oldList}

        case NETWORK_ERROR:
            return {...state, isLoading: false, networkError: true, errorMessage: action.payload}

        default:
            return state
    }
}
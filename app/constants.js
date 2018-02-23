export const BASE_URL = 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0'
export const SHOW_LOADER = 'show_loader'
export const FETCH_LIVE_PRICE = 'fetch_live_price'
export const FETCH_MORE_LIVE_PRICE = 'fetch_more_live_price'
export const NETWORK_ERROR = 'network_error'
export const DEFAULT_SIZE = 20
export const API_KEY = 'apikey=ss630745725358065467897349852985'
export const POST_DATA = () => {
    return JSON.stringify('cabinclass=Economy&country=UK&currency=GBP&locale=en-GB&locationSchema=sky&originplace=EDI-sky&destinationplace=LOND-sky&outbounddate=2018-03-05&inbounddate=2018-03-06&adults=1&children=0&infants=0&'+ API_KEY)
}
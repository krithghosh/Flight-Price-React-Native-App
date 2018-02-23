import {BASE_URL, API_KEY, POST_DATA} from '../constants'

export const createSession = async() => {
    return await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: POST_DATA()
    })
}

export const getLivePrices = async() => {
    try{
        let response = await createSession()
        let sessionUrl =  await response.headers.map.location[0]
        return await fetch(sessionUrl + '?' + API_KEY, {
            method: 'GET',
            qs: {'apikey': API_KEY}
        })
        .then(data => {return data})
        .catch(error => {
            throw new Error('Network request failed')
        })
    } catch(error){
        throw new Error('Network request failed')
    }
}
import axios from "axios";

const API_URL = "";

const API_GREYMAIL  = async (urlObject, payload, type) => {
    return await axios ({
        method: urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}/${type}`,
        data: payload
    })
}
// this is the function which 
// accepts three arguements urlObject, payload and type 
// called by useApi hook to make axios request
// returns promise of axios request

// type is the param sent for email type (this functionality was added after using useApi for fetching Email of different types)
export default API_GREYMAIL;
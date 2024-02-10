import {useState} from "react";
import API from "../services/api"

const useApi = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState (false);


    const call = async (payload, type="") => {
        setResponse(null);
        setError("")
        setIsLoading(true); 

        try {
            let res = await API(urlObject, payload, type);
            setResponse(res.data);
        }
        catch (error) {
            console.error(error.message);    
        } 
        finally {
            setIsLoading(false);
        }
    }
    return { call , response , error , isLoading};
}
// this is the useApi named custom hook which 
// takes object (of endpoint and method from api.urls .js) 
// returns object of call, response, error and isLoading as outputs

// call function is also modified to have type parameter for getting email type and passing to 
export default useApi;
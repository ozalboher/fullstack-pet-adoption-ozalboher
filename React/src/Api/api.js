import axios from "axios";
import { getStorageUser } from "../Auth/storage";
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_PORT
})

const getConfig = () => {
    return {
        headers: {
            userid: getStorageUser() // getStorageUser() is a function from storage.js
        }
    }
}

export const api = {
    send: async (method, url, payload) => {
     
        if (method === 'get' || method === 'delete') {
            const resp = await instance[method](url, getConfig());
            return resp.data;
        } else {
            const resp = await instance[method](url, payload, getConfig()); // instance is axios ,method is post, url is process.env.REACT_APP_API_PORT + 'users' and payload
            return resp.data;
        }
    }
}
/*             // What it does behind the scenes:
            axios.post(process.env.REACT_APP_API_PORT + 'url', {
                // payload for example:
                email,
                password2,
                firstName,
                lastName,
                phoneNumber
            }) */  
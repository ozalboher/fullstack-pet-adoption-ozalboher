import { api } from "Api/api";

export const usersApi = {
    //GET
    getName: async () => {
        return api.send('get', '/users/get-name');
    },
    getUserInfo: async () => {
        return api.send('get', '/users/get-user-info');
    },
    findUserEmail: async (itemId) => {
        return api.send('get', '/users/find-user-email/' + itemId);
    }, 
    findIfAdmin: async () => {
        return api.send('get', '/users/find-if-admin');
    },
    getAllUsers: async () => {
        return api.send('get', '/users/get-all-users');
    },
    //POST
    registerUser: async (payload) => {
        return api.send('post', '/users/register-user', payload);
    },
    //PUT
    updateUser: async (payload) => {
        return api.send('put', '/users/update-user', payload);
    },


}

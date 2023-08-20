import { api } from "Api/api";

export const petsApi = {
    //GET
    get: async () => {
        return api.send('get', '/pets'); 
    },
    getById: async (itemId) => {
        return api.send('get', '/pets/get-pet/' + itemId);
    },
    checkIfUserOwnsPet: async (itemId) => {
        return api.send('get', '/pets/check/' + itemId);
    },
    checkIfUserSavedPet: async (itemId) => {
        return api.send('get', '/pets/check-saved/' + itemId);
    },
    getOwnerships: async () => {
        return api.send('get', '/pets/get-ownerships');
    },
    getSavedPets: async () => {
        return api.send('get', '/pets/get-saved-pets');
    },
    getFiltered: async (payload) => { 
        return api.send('post', '/pets/get-filtered', payload);
    },
    //PUT
    updateById: async (itemId) => { 
        return api.send('put', '/pets/' + itemId);
    },
    //POST
    addOwner: async (itemId) => { 
        return api.send('post', '/pets/add-owner/' + itemId);
    },
    savePet: async (itemId) => {
        return api.send('post', '/pets/save-pet/' + itemId);
    }, 
    addPet: async (payload) => {
        return api.send('post', '/pets/add-pet', payload);
    },
    //DELETE
    deleteOwner: async (itemId) => {
        return api.send('delete', '/pets/delete-owner/' + itemId);
    },
    deleteSavedPet: async (itemId) => {
        return api.send('delete', '/pets/delete-saved-pet/' + itemId);
    },
}

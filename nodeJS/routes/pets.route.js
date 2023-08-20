const express = require('express');
const route = express.Router();
const db = require('../data/database');
const { validateSchema } = require('../schema/validate');
const { petsSchema } = require('../schema/pets.schema');

const {getAllPets, getPetById, getPetsByFilter, updateAdoptionStatus, addOwner, checkIfUserOwnsPet, checkIfUserSavedPet, deleteOwner, deleteSavedPet, getOwnerships, savePet, getSavedPets, addPet} = require('../controllers/pets.controller');


route.get('/', getAllPets);
route.get('/get-pet/:id', getPetById);
route.get('/check/:id', checkIfUserOwnsPet);
route.get('/check-saved/:id', checkIfUserSavedPet);
route.get('/get-ownerships', getOwnerships);
route.get('/get-saved-pets', getSavedPets);
route.post('/get-filtered',/* validateSchema(usersSchema), */ getPetsByFilter);
route.put('/:id', updateAdoptionStatus);
route.post('/add-owner/:id', addOwner);
route.post('/save-pet/:id', savePet);
route.post('/add-pet', validateSchema(petsSchema), addPet);
route.delete('/delete-owner/:id', deleteOwner);
route.delete('/delete-saved-pet/:id', deleteSavedPet);


module.exports = route;


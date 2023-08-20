const { use } = require('../routes/pets.route');
const { getAllPetsService, getPetByIdService, getPetsByFilterService, updateAdoptionStatusService, addOwnerService, checkIfUserOwnsPetService, checkIfUserSavedPetService, deleteOwnerService, deleteSavedPetService, getOwnershipsService, savePetService, getSavedPetsService, addPetService } = require('../services/pets.service');

const getAllPets = async (req, res, next) => {
    try {
        const pets = await getAllPetsService();
        res.status(200).json(pets); // Send JSON response
    } catch (error) {
        next(error); // Pass any errors to the error handling middleware
    }
};
const getPetById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const pet = await getPetByIdService(id);
        console.log(id);
        res.status(200).json(pet); 
    } catch (error) {
        next(error); 
    }
};
const getPetsByFilter = async (req, res, next) => {
    try {
        const pets = await getPetsByFilterService(req.body);
        res.status(200).json(pets); 
    } catch (error) {
        next(error); 
    }
};
const updateAdoptionStatus = async (req, res, next) => {
    try {
        const params = req.params.id;
        await updateAdoptionStatusService(params);
        res.status(200).send('success');
    } catch (error) {
        next(error);
    }
};
const addOwner = async (req, res, next) => {
    const id  = req.id; 
    const params  = req.params.id;
    try {
        await addOwnerService(id, params);
        res.status(200).send('success');
    }
    catch (error) {
        next(error);
    } 
};
const checkIfUserOwnsPet = async (req, res, next) => {
    const id  = req.id;
    const petId = req.params.id;
    try {
        const result = await checkIfUserOwnsPetService(id, petId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
const checkIfUserSavedPet = async (req, res, next) => {
    const id  = req.id;
    const petId = req.params.id;
    try {
        const result = await checkIfUserSavedPetService(id, petId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getOwnerships = async (req, res, next) => {
    const id  = req.id;
    try {
        const result = await getOwnershipsService(id);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
const deleteOwner = async (req, res, next) => {
    const petId = req.params.id;
    try {
        await deleteOwnerService(petId);
        res.status(200).send('success');
    }
    catch (error) {
        next(error);
    }  
};
const deleteSavedPet = async (req, res, next) => {
    const userId = req.id;
    const petId = req.params.id;
    try {
        await deleteSavedPetService(userId, petId);
        res.status(200).send('success');
    }
    catch (error) {
        next(error);
    }
};
const savePet = async (req, res, next) => {
    const userId = req.id;
    const petId = req.params.id;
    try {
        await savePetService(userId, petId);
        res.status(200).send('success');
    }
    catch (error) {
        next(error);
    }
};
const getSavedPets = async (req, res, next) => {
    const userId = req.id;
    try {
        const result = await getSavedPetsService(userId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
const addPet = async (req, res) => {
    const body = req.body;
    try{
      await addPetService(body);
      return res.status(200).send("Pet added successfully");
    }catch (error) {next(error);}
  };

module.exports = {
    getAllPets,
    getPetsByFilter,
    getPetById,
    updateAdoptionStatus,
    addOwner,
    deleteOwner,
    deleteSavedPet,
    checkIfUserOwnsPet,
    checkIfUserSavedPet,
    getOwnerships,
    savePet,
    getSavedPets,
    addPet
}
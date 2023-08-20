const db = require('../data/database');
const crypto = require('crypto');

const getAllPetsService = async () => {
    const query = `SELECT * FROM pets`;
    const [pets] = await db.query(query);
    return pets; 
};
const getPetByIdService = async (id) => {
    const query = `SELECT * FROM pets WHERE id = '${id}'`;
    const [pet] = await db.query(query);
    return pet[0];
};
const getPetsByFilterService = async (data) => {
  
    let {name, selectedOption1, selectedOption2, minHeight, maxHeight, minWeight, maxWeight} = data;
    // Set default values, so sql query won't break if the user doesn't enter anything:
    minHeight = minHeight === "" ? '0' : minHeight;
    maxHeight = maxHeight === "" ? '1000' : maxHeight;
    minWeight = minWeight === "" ? '0' : minWeight;
    maxWeight = maxWeight === "" ? '1000' : maxWeight;

    let query = `SELECT * FROM pets WHERE 1=1`;

    if(name){
        query += ` AND pets.name LIKE '%${name}%'`;
    }
    if(selectedOption1 && selectedOption2){
        query += ` AND pets.type = '${selectedOption1}' AND pets.adoptionStatus = '${selectedOption2}'`;
    }
    else if(selectedOption1){
        query += ` AND pets.type = '${selectedOption1}'`;
    }
    else if(selectedOption2){
        query += ` AND pets.adoptionStatus = '${selectedOption2}'`;
    }

    query += `
    AND (
        (${!minHeight} OR pets.height >= ${parseInt(minHeight)}) AND
        (${!maxHeight} OR pets.height <= ${parseInt(maxHeight)}) AND
        (${!minWeight} OR pets.weight >= ${parseInt(minWeight)}) AND
        (${!maxWeight} OR pets.weight <= ${parseInt(maxWeight)})
    )`;

    // Execute the query
    const [pets] = await db.query(query);
    /* res.json(pets);  */
    return pets;
};
const updateAdoptionStatusService = async (params) => {
    let query = `UPDATE pets SET adoptionStatus = `;
    const [petId, status] = params.split('.');
    switch(status){
        case '0':
         query += `'Fostered' WHERE id = '${petId}'` ;
        break;
        case '1':
         query +=  `'Adopted' WHERE id = '${petId}'`;
        break;
        case '2':
         query += `'Available' WHERE id = '${petId}'` ;
        break;
    }
    await db.query(query);
};
const addOwnerService = async (userId, params) => {
    const [petId, status] = params.split('.');
    const isFostered = await checkIfFosteredService(petId);

    let query = `INSERT INTO ownership (user_id, pet_id, status)`;
    if(status==='1'){
        if(isFostered){
           deleteOwnerService(petId);
        }
        query +=  `VALUES ('${userId}', '${petId}', 'Adopted')`;
    }
    else{
        query += `VALUES ('${userId}', '${petId}', 'Fostered')` ;
    }
    db.query(query);
};
const checkIfFosteredService = async (petId) => {
    const query = `SELECT * FROM ownership WHERE pet_id = '${petId}' AND status = 'Fostered'`;
    const [result] = await db.query(query);
    if(result.length === 0){
       return false;
    }
    return result[0].user_id;
};
const checkIfUserOwnsPetService = async (userId, petId) => {
    const query = `SELECT * FROM ownership WHERE user_id = '${userId}' AND pet_id = '${petId}'`;
    const [result] = await db.query(query);
    if(result.length === 0){
       return false;
    }
    return true;
}
const checkIfUserSavedPetService = async (userId, petId) => {
    const query = `SELECT * FROM saved_pets WHERE user_id = '${userId}' AND pet_id = '${petId}'`;
    const [result] = await db.query(query);
    if(result.length === 0){
         return false;
    }
    return true;
}
const getOwnershipsService = async (userId) => {
    let query = `SELECT pet_id FROM ownership WHERE user_id = '${userId}'`;
    const [result] = await db.query(query);
    const array = result.map(obj => obj.pet_id);
    return array;
}
const deleteOwnerService = async (petId) => {
    const query = `DELETE FROM ownership WHERE pet_id = '${petId}'`;
    await db.query(query);
}
const deleteSavedPetService = async (userId, petId) => {
    const query = `DELETE FROM saved_pets WHERE user_id = '${userId}' AND pet_id = '${petId}'`;
    await db.query(query);
}
const savePetService = async (userId, petId) => {
    const query = `INSERT INTO saved_pets (user_id, pet_id) VALUES ('${userId}', '${petId}')`;
    await db.query(query);
}
const getSavedPetsService = async (userId) => {
    let query = `SELECT pet_id FROM saved_pets WHERE user_id = '${userId}'`;
    const [result] = await db.query(query);
    const array = result.map(obj => obj.pet_id);
    return array;
}
const addPetService = async (pet) => {
    const updatedObject = {
        id: crypto.randomUUID(),
        ...pet
    };
    const arrayData = Object.values(updatedObject);
    const query = `INSERT INTO pets (id, type, name, adoptionStatus, picture, height, weight, color, bio, hypoallergnic, dietery, breed) VALUES (?)`;
    await db.query(query, [arrayData]);
};
module.exports = {
    getAllPetsService,
    getPetByIdService,
    getPetsByFilterService,
    updateAdoptionStatusService,
    addOwnerService,
    checkIfUserOwnsPetService,
    checkIfUserSavedPetService,
    deleteOwnerService,
    deleteSavedPetService,
    getOwnershipsService,
    savePetService,
    getSavedPetsService,
    addPetService
};


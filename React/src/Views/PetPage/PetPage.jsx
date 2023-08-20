import React from "react";
import { useState, useEffect, useContext } from "react";
import { Btn } from "UIKit";
import { authContext } from "Auth/authContext";
import { petsApi } from "helpers/petsApi";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCheck, faRulerVertical, faWeightScale, faPalette, faHandDots, faHeartPulse, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import "./PetPage.css";

export const PetPage = () => {
  const PetImage = require('../../Assets/Pet_Default.png'); 
  const { isLogin } = useContext(authContext);
  const [item, setItem] = useState([]); // Pet (item) state
  const [isOwnership, setIsOwnership] = useState(false); // Ownership state to set the return pet button
  const [isSaved, setIsSaved] = useState(false); // Saved state to set the save pet button
  const { itemId } = useParams(); // Item id (pet_id) recieved from the SearchPage (by url params)

  useEffect(() => {
    const loadItems = async () => {
      try{
        const resp = await petsApi.getById(itemId);
        setItem(resp);
      } catch (error) {console.error("Error occurred:", error);};
      try{
        const resp = await petsApi.checkIfUserOwnsPet(itemId);
        setIsOwnership(resp);
      } catch (error) {console.error("Error occurred:", error);};
      try{
        const resp = await petsApi.checkIfUserSavedPet(itemId);
        setIsSaved(resp);
      } catch (error) {console.error("Error occurred:", error);};
    };

    loadItems();
  }, []);
  const handleAdoptBtn = async () => { 
    if(item.adoptionStatus === 'Available' || item.adoptionStatus === 'Fostered'){
    alert('Thank you for adopting a pet!');
    // update the pet table with adopted = 1
    try {
      const resp = await petsApi.updateById(`${itemId}.1`);
      console.log(resp);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    // insert user to the ownership table with his user.id + pet.id
    try {
      const resp = await petsApi.addOwner(`${itemId}.1`);
      console.log(resp);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    window.location.reload();
   }
  };
    const handleFosterBtn = async () => {
      if(item.adoptionStatus === 'Available' && item.adoptionStatus !== 'Fostered'){
      alert('fostered!');
      try {
        const resp = await petsApi.updateById(`${itemId}.0`);
        console.log(resp);
      } catch (error) {
        console.error("Error occurred:", error);
      }
      try {
        const resp = await petsApi.addOwner(`${itemId}.0`);
        console.log(resp);
      } catch (error) {
        console.error("Error occurred:", error);
      }
      window.location.reload();
    }
  };
   const handleReturnBtn = async () => {
    if(item.adoptionStatus === 'Adopted' || item.adoptionStatus === 'Fostered'){
    alert('Thank you for returning a pet!');
    try {
      const resp = await petsApi.updateById(`${itemId}.2`);
      console.log(resp);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    try {
      const resp = await petsApi.deleteOwner(`${itemId}`);
      console.log(resp);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    window.location.reload();
  };
}; 

const handleGoBack = () => {
  window.history.back(); 
};
const handleSaveBtn = async () => {
  // insert user to the savedPets table with his user.id + pet.id
  if(!isSaved){
  alert('Saved!');
  try {
    const resp = await petsApi.savePet(`${itemId}`);
    console.log(resp);
  } catch (error) {
    console.error("Error occurred:", error);
  }
  window.location.reload();
}else {
  console.log('unsave');
  try {
    const resp = await petsApi.deleteSavedPet(`${itemId}`);
    console.log(resp);
  } catch (error) {
    console.error("Error occurred:", error);
  }
  window.location.reload();
};
};
  return (
    <>
    {!isLogin && 
    <div className="PetPage-item-wrapper">
        <button onClick={handleGoBack} className="PetPage-btn back-btn"><FontAwesomeIcon icon={faAnglesLeft} /> Go Back</button>
        <p className="PetPage-item-txt-grey">Please Log-In To View Additional Details About Pets</p>
        <div>
      <img src={PetImage} alt="Pet Default" />
        </div>
   </div>
    }
    {isLogin && <div className="PetPage-item-wrapper">
          <div key={item.id}>
            <div className="PetPage-item">
            <button onClick={handleGoBack} className="PetPage-btn back-btn"><FontAwesomeIcon icon={faAnglesLeft} /> Go Back</button>
             <img src={item.picture} alt={item.name} className="PetPage-item-image" />
              <div className="PetPage-item-content">
                <h2 className="PetPage-item-name">{item.name}</h2>
                <h2 className="PetPage-item-txt-grey">{item.type}</h2>
                <br />
                <p>{item.bio}</p>
                <br />
                <p><FontAwesomeIcon icon={faCheck}/> Status <span className="PetPage-item-txt-grey">{item.adoptionStatus}</span></p>
                <br />
                <p><FontAwesomeIcon icon={faPaw}/> Breed <span className="PetPage-item-txt-grey">{item.breed}</span></p>
                <p><FontAwesomeIcon icon={faRulerVertical}/> Height <span className="PetPage-item-txt-grey">{item.height}</span></p>
                <p><FontAwesomeIcon icon={faWeightScale}/> Weight <span className="PetPage-item-txt-grey">{item.weight}</span></p>
                <p><FontAwesomeIcon icon={faPalette}/> Color <span className="PetPage-item-txt-grey">{item.color}</span></p>
                <p><FontAwesomeIcon icon={faHandDots}/> Hypoallergnic <span className="PetPage-item-txt-grey">{(item.hypoallergnic)?'Yes':'No'}</span></p>
                <p><FontAwesomeIcon icon={faHeartPulse}/> Dietery <span className="PetPage-item-txt-grey">{(item.dietery)?'Yes':'No'}</span></p>
                <br />
                <div className="PetPage-line"></div>
                <div className="PetPage-btn-wrap">
                    <div>
                    <button onClick={handleAdoptBtn} className={`PetPage-btn ${item.adoptionStatus === 'Adopted' ? 'disable' : 'adopt'}`}>Adopt</button>
                    <button onClick={handleFosterBtn} className={`PetPage-btn ${item.adoptionStatus === 'Fostered' || item.adoptionStatus === 'Adopted' ? 'disable' : 'foster'}`}>Foster</button>
                    {isOwnership && <button onClick={handleReturnBtn} className="PetPage-btn return">Return Pet</button>}
                    </div>
                    <div>
                    <button onClick={handleSaveBtn} className="PetPage-btn ">{isSaved ? 'Unsave' : 'Save'}</button>
                    </div>
                </div>

              </div>
            </div>
          </div>
      </div>}
    </>
  );
};
















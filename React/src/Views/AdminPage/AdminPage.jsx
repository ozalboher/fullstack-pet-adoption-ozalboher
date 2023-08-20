import React from "react";
import { useState, useEffect } from "react";
import { CenterUp } from "UIKit";
import { petsApi } from "helpers/petsApi";
import { usersApi } from "helpers/usersApi";
import { Msg } from "UIKit";
import { UsersList } from "../../Components/UsersList/UsersList";
import { AddPetForm } from "../../Components/AddPetForm/AddPetForm";

export const AdminPage = () => {

useEffect(() => {
    const loadUsers = async () => {
        try {
            const resp = await usersApi.getAllUsers();
            setUsers(resp);
            console.log(resp);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };
    loadUsers();
}, []);

  const initialValues = {
    type: "cat",
    name: "snuffles",
    adoptionStatus: "available",
    picture: "//picture-url",
    height: "20",
    weight: "50",
    color: "Blue",
    bio: "hey there im a cat",
    hypoallergnic: true,
    dietery: false,
    breed: "german shepard",
  };
  /* const [pet, setPet] = useState(initialValues); */
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


const handleAddPet = async (newPet) => {
    try {
        await petsApi.addPet(newPet);
        setError("");
        setSuccess("Successfully added pet");
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } catch (error) {
        console.error("Error occurred:", error);
        setError(error.response.data);
    }
};
  return (
    <>
    <div>
        <CenterUp>
          <h1 className="search-title">Admin Page</h1>
        </CenterUp>
        <CenterUp>
          <div className="MyPetsPage-line"></div>
        </CenterUp>
        <br />
      <AddPetForm pet={initialValues} onClick={handleAddPet} />
      <CenterUp>
              {error && <Msg msg={error} isError={true} />}
              {success && <Msg msg={success} isError={false} />}
     </CenterUp>
     <UsersList users={users} />
    </div>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { CenterUp } from "UIKit";
import { usersApi } from "helpers/usersApi";
import { Msg } from "UIKit";
import { UserProfileCard } from "Components/UserProfileCard/UserProfileCard";

export const ProfilePage = () => {
  const initialValues = {
    bio: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };
  const [user, setUser] = useState(initialValues);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const resp = await usersApi.getUserInfo();
        setEmail(resp.email);
        if (resp.bio === null) {
          resp.bio = "";
        }
        setUser({
          ...initialValues, // Reset to initial values
          ...resp, // Overwrite with response data
        });
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    loadUserInfo();
  }, []);

  const handleUserUpdate = async (newUser) => {
    if (newUser.email !== email) { // If the user changed his email, check if it's available
      try {
        await usersApi.findUserEmail(newUser.email);
      } catch (error) {
        console.error("Error occurred:", error);
        setError(error.response.data);
        return;
      }
    }
    try {
      await usersApi.updateUser(newUser);
      setError("");
      setSuccess("Successfully updated user info");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error occurred:", error);
      setSuccess("");
      setError(error.response.data);
    }
  };

  return (
    <>
      <div>
        <CenterUp>
          <h1 className="search-title">Profile Page</h1>
        </CenterUp>
        <CenterUp>
          <div className="MyPetsPage-line"></div>
        </CenterUp>
        <br />

        {isDataLoaded && (
          <>
            <UserProfileCard user={user} onClick={handleUserUpdate} />
            <CenterUp>
              {error && <Msg msg={error} isError={true} />}
              {success && <Msg msg={success} isError={false} />}
            </CenterUp>
          </>
        )}
      </div>
    </>
  );
};

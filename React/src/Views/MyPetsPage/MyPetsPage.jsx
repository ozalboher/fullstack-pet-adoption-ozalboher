import React, { useEffect, useState } from "react";
import { CenterUp } from "UIKit";
import { Card } from "Components/Card/Card";
import { petsApi } from "helpers/petsApi";
import "./MyPetsPage.css";

export const MyPetsPage = () => {
  const PetImage = require("../../Assets/Pet_Default.png");
  const [items, setItems] = useState([]); // Pet (items) state
  const [savedItems, setSavedItems] = useState([]); // Saved Pets (items) state

  useEffect(() => {
    const loadItems = async () => {
      try {
        const resp = await petsApi.getOwnerships();
        Promise.all(
          resp.map(async (item) => {
            const resp = await petsApi.getById(item);
            return resp;
          })
        )
          .then((newResponses) => {
            const newList = [...newResponses, ...items];
            setItems(newList);
          })
          .catch((error) => {
            console.error("Error occurred:", error);
          });
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    const loadSavedItems = async () => {
      try {
        const resp = await petsApi.getSavedPets();
        Promise.all(
          resp.map(async (item) => {
            const resp = await petsApi.getById(item);
            return resp;
          })
        )
          .then((newResponses) => {
            const newList = [...newResponses, ...savedItems];
            setSavedItems(newList);
          })
          .catch((error) => {
            console.error("Error occurred:", error);
          });
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    loadItems();
    loadSavedItems();
  }, []);

  return (
    <>
      <div>
        <CenterUp>
          <h1 className="search-title">My Pets</h1>
        </CenterUp>
        <CenterUp>
          <div className="MyPetsPage-line"></div>
        </CenterUp>
      </div>
      {items.length === 0 && (
        <>
          <div className="PetPage-item-wrapper">
            <p className="PetPage-item-txt-grey">
              You Currently Do Not Own Or Foster Any Pets
            </p>
            <div>
              <img src={PetImage} alt="Pet Default" />
            </div>
          </div>
        </>
      )}
      <Card items={items} />
      {savedItems.length > 0 && (
        <div>
          <CenterUp>
            <h1 className="search-title">Saved Pets</h1>
          </CenterUp>
          <CenterUp>
            <div className="MyPetsPage-line"></div>
          </CenterUp>
        </div>
      )}
      <Card items={savedItems} />
    </>
  );
};

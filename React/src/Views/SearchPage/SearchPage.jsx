import React from "react";
import { useState, useEffect } from "react";
import { petsApi } from "helpers/petsApi";
import { CenterUp } from "UIKit";
import { SearchForm } from "Components/SearchForm/SearchForm";
import { Card } from "Components/Card/Card";
import "./SearchPage.css";

export const SearchPage = () => {

  const initialFilters = {
    selectedOption1: null,
    selectedOption2: null,
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    name: ''
  };
  const [filters, setFilters] = useState(initialFilters); // Filters state for SearchForm
  const [items, setItems] = useState([]); // Cards (items) state

  // Load items on page load
  useEffect(() => {

    const loadItems = () => {
      petsApi.get()
        .then((resp) => {
          setItems(resp);
        })
        .catch((error) => {
          console.error("Error occurred:", error);
        });
    };
    
    loadItems();
  }, []);
  
  const handleTypeChange = (option) => {
    console.log(option);
    setFilters({ ...filters, selectedOption1: option });
  };

  const handleStatusChange = (option) => {
    console.log(option);
   setFilters({ ...filters, selectedOption2: option });
  };

  const handleInputChange = (input) => {
    setFilters({
      ...filters,
      minHeight: input.hasOwnProperty("Min Height (CM)") ? input["Min Height (CM)"] : filters.minHeight,
      maxHeight: input.hasOwnProperty("Max Height (CM)") ? input["Max Height (CM)"] : filters.maxHeight,
      minWeight: input.hasOwnProperty("Min Weight (CM)") ? input["Min Weight (CM)"] : filters.minWeight,
      maxWeight: input.hasOwnProperty("Max Weight (CM)") ? input["Max Weight (CM)"] : filters.maxWeight,
      name: input.hasOwnProperty("Name") ? input["Name"] : filters.name,
    });
  };
  
  const loadPets = () => {
    petsApi.getFiltered(filters).then((resp) => { // get2 for sql rendering
      let filteredItems = resp;
      setItems(filteredItems);
    });

  };




  return (
    <>
      <div>
          <CenterUp>
            <h1 className="search-title">Search For A Pet</h1>
          </CenterUp>
        <SearchForm handleTypeChange={handleTypeChange} handleStatusChange={handleStatusChange} handleInputChange={handleInputChange} filters={filters} setFilters={setFilters} onClick={loadPets} />
      </div>

      <Card items={items}/>
    </>
  );
};



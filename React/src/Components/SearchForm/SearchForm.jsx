import React from "react";
import { useState } from "react";
import { CenterUp, DropMenu, TextInput, Btn, ToggleContainer } from "UIKit";
import "./SearchForm.css";

export const SearchForm = ({ handleTypeChange, handleStatusChange, handleInputChange, filters, setFilters, onClick }) => {
  const listParams = {
    type: ["Dog", "Cat"],
    adoptionStatus: ["Available", "Adopted", "Fostered"]
  };

  const [isChecked, setIsChecked] = useState(false); // Toggle state 

  const handleToggleChange = () => {
    console.log(isChecked);
    setIsChecked(!isChecked);
    if (isChecked === true) {
      clearFilters();
    }
  };
  
  const clearFilters = () => {
    const newFilters = {
      ...filters,
      selectedOption2: null,
      minHeight: '',
      maxHeight: '',
      minWeight: '',
      maxWeight: '',
      name: ''
    };
    setFilters(newFilters);
  };

  return (
    <div className="SearchForm">
      <CenterUp>
        <ToggleContainer isChecked={isChecked} handleToggleChange={handleToggleChange} />
      </CenterUp>
      <CenterUp>
        <div className={isChecked ? 'animate-out' : ''}>
          <DropMenu name={"Type"} items={listParams.type} onSelect={handleTypeChange} />
        </div>
        {isChecked && (
          <div className='animate-in'>
            <DropMenu name={"Adoption Status"} items={listParams.adoptionStatus} onSelect={handleStatusChange} />
          </div>
        )}
      </CenterUp>
      {isChecked && (
        <div className="animate-in">
          <div>
            <CenterUp>
              {/* Add your content here */}
            </CenterUp>
            <div>
              <CenterUp>
                <TextInput name={"Min Height (CM)"} value={filters.minHeight} onChange={handleInputChange} />
                <TextInput name={"Max Height (CM)"} value={filters.maxHeight} onChange={handleInputChange} />
              </CenterUp>
              <CenterUp>
                <TextInput name={"Min Weight (CM)"} value={filters.minWeight} onChange={handleInputChange} />
                <TextInput name={"Max Weight (CM)"} value={filters.maxWeight} onChange={handleInputChange} />
              </CenterUp>
            </div>
            <CenterUp>
              <TextInput name={"Name"} value={filters.name} onChange={handleInputChange} />
            </CenterUp>
          </div>
        </div>
      )}
      <br />
      <CenterUp>
        <Btn name={"Search"} onClick={onClick} />
      </CenterUp>
    </div>
  );
};

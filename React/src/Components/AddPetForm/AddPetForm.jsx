import React from "react";
import { useState } from "react";
import { CenterUp } from "UIKit";

export const AddPetForm = ({ pet, onClick }) => {
  const [editedPet, setEditedPet] = useState(pet);
  const maxBioLength = 84;
  const remainingChars = maxBioLength - (editedPet.bio || "").length;

  const handleBioChange = (e) => {
    const newBio = e.target.value;
    if (newBio.length <= maxBioLength) {
      setEditedPet({ ...editedPet, bio: newBio });
    }
  };

  const handleSaveBtn = (e) => {
    e.preventDefault();
    onClick(editedPet);
  };
  return (
    <CenterUp>
      <div>
        <div className="form-content">
          <CenterUp>
            <div className="text-area-wrapper">
              <p>Add Pet Bio</p>
              <textarea
                placeholder="Type here..."
                className="text-area-input-field"
                value={editedPet.bio}
                onChange={handleBioChange}
              />
              <p className="remaining-chars">
                {remainingChars} characters left
              </p>
            </div>
          </CenterUp>
          <br />
          <form onSubmit={handleSaveBtn}>
            <CenterUp>
              <div className="field input-field">
                <p>Type</p>
                <input
                  type="text"
                  placeholder="Animal Type"
                  className="input"
                  value={editedPet.type}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, type: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field input-field">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  value={editedPet.name}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, name: e.target.value })
                  }
                  required
                />
              </div>
            </CenterUp>
            <CenterUp>
              <div className="field input-field">
                <p>Adoption Status</p>
                <input
                  type="text"
                  placeholder="Adoption Status"
                  className="input"
                  value={editedPet.adoptionStatus}
                  onChange={(e) =>
                    setEditedPet({
                      ...editedPet,
                      adoptionStatus: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="field input-field">
                <p>Picture URL</p>
                <input
                  type="text"
                  placeholder="URL"
                  className="input"
                  value={editedPet.picture}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, picture: e.target.value })
                  }
                />
              </div>
            </CenterUp>
            <CenterUp>
              <div className="field input-field">
                <p>Height</p>
                <input
                  type="number"
                  placeholder="Height"
                  className="input"
                  value={editedPet.height}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, height: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field input-field">
                <p>Weight</p>
                <input
                  type="number"
                  placeholder="Weight"
                  className="input"
                  value={editedPet.weight}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, weight: e.target.value })
                  }
                  required
                />
              </div>
            </CenterUp>
            <CenterUp>
              <div className="field input-field">
                <p>Color</p>
                <input
                  type="text"
                  placeholder="Color"
                  className="input"
                  value={editedPet.color}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, color: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field input-field">
                <p>Breed</p>
                <input
                  type="text"
                  placeholder="Breed"
                  className="input"
                  value={editedPet.breed}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, breed: e.target.value })
                  }
                  required
                />
              </div>
            </CenterUp>
            <CenterUp>
              <div className="field input-field">
                <p>hypoallergenic</p>
                <input
                  type="text"
                  placeholder="true/false"
                  className="input"
                  value={editedPet.hypoallergnic}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, hypoallergnic: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field input-field">
                <p>Dietry</p>
                <input
                  type="text"
                  placeholder="true/false"
                  className="input"
                  value={editedPet.dietery}
                  onChange={(e) =>
                    setEditedPet({ ...editedPet, dietery: e.target.value })
                  }
                  required
                />
              </div>
            </CenterUp>

            <br />
            <div className="field button-field">
              <button>Add Pet</button>
            </div>
          </form>
        </div>
      </div>
    </CenterUp>
  );
};

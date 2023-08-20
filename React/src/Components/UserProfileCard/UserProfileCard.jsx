import React, { useState } from "react";
import { CenterUp } from "UIKit";
import "./UserProfileCard.css";

export const UserProfileCard = ({ user, onClick }) => {
  const [editedUser, setEditedUser] = useState(user);
  const maxBioLength = 84;
  const remainingChars = maxBioLength - (editedUser.bio || "").length;

  const handleBioChange = (e) => {
    const newBio = e.target.value;
    if (newBio.length <= maxBioLength) {
      setEditedUser({ ...editedUser, bio: newBio });
    }
  };

  const handleSaveBtn = (e) => { 
    e.preventDefault();
    onClick(editedUser);
  }
  return (
    <CenterUp> 
    <div>
      <div className="form-content">
      <CenterUp>
            <div className="text-area-wrapper">
              <p>Add A Short Bio</p>
              <textarea
                placeholder="Type here..."
                className="text-area-input-field"
                value={editedUser.bio}
                onChange={handleBioChange}
              />
              <p className="remaining-chars">{remainingChars} characters left</p>
            </div>  
          </CenterUp>
          <br />
          <form onSubmit={handleSaveBtn}> 
      <CenterUp>
        <div className="field input-field">
        <p >First Name</p>
          <input
            type="text"
            placeholder="First Name"
            className="input"
            value={editedUser.firstName}
            onChange={(e) =>
              setEditedUser({ ...editedUser, firstName: e.target.value })
            }
            required
          />
        </div>
      </CenterUp>
      <CenterUp>
        <div className="field input-field">
        <p >Last Name</p>
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            value={editedUser.lastName}
            onChange={(e) =>
              setEditedUser({ ...editedUser, lastName: e.target.value })
            }
            required
          />
        </div>
      </CenterUp>
      <CenterUp>
        <div className="field input-field">
        <p >Email </p>
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
            required
          />
        </div>
      </CenterUp>
      <CenterUp>
        <div className="field input-field">
        <p >Password</p>
          <input
            type="password"
            placeholder="New Password"
            className="password"
            value={editedUser.password}
            onChange={(e) =>
              setEditedUser({ ...editedUser, password: e.target.value })
            }
           
          />
        </div>
      </CenterUp>
      <CenterUp>
        <div className="field input-field">
        <p >Phone Number</p>
          <input
            type="tel"
            placeholder="Phone Number"
            className="input"
            value={editedUser.phoneNumber}
            onChange={(e) =>
              setEditedUser({ ...editedUser, phoneNumber: e.target.value })
            }
            required
          />
        </div>
      </CenterUp>

      <br />
        <div className="field button-field">
          <button>Save</button>
        </div>
        </form>
      </div>
    </div>
    </CenterUp>
  );
};

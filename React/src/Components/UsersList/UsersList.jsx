import React, { useState } from "react";
import { CenterUp } from "UIKit";
import { v4 as uuidv4 } from 'uuid';
import "./UsersList.css";

export const UsersList = ({ users }) => {
  const randomUUID = uuidv4();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
    <br />
    <br />
    <br />
    <div>
      <CenterUp>
      <h2 className="user-card">Registered Users</h2>
      </CenterUp>
    <CenterUp>
      <div className="user-list-container">
        <div className="user-list">
          {users.map((user, index) => (
            <div
              key={index}
              className={`user-card ${selectedUser === user ? "selected" : ""}`}
              onClick={() => handleUserClick(user)}
            >
             {!isOpen && <span>{user.firstName}</span>}
            </div>
          ))}
        </div>
        <div className="user-details">
          {isOpen && (
            <div>
              <span className="user-card">close</span>
              <h2>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h2>
              <p>Email: {selectedUser.email}</p>
              <p>Phone: {selectedUser.phoneNumber}</p>
              <p>Role: {selectedUser.role}</p>
            </div>
          )}
        </div>
      </div>
    </CenterUp>
    </div>
    </>
  );
};

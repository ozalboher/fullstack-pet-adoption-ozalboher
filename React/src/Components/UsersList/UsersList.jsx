import React, { useState } from "react";
import { CenterUp } from "UIKit";
import "./UsersList.css";

export const UsersList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
    <br />
    <br />
    <br />
    <div>
    <CenterUp>
      <h2>Users List</h2>
      <div className="user-list-container">
        <div className="user-list">
          {users.map((user) => (
            <div
              key={user.id}
              className={`user-card ${selectedUser === user ? "selected" : ""}`}
              onClick={() => handleUserClick(user)}
            >
              <span>{user.firstName}</span>
            </div>
          ))}
        </div>
        <div className="user-details">
          {selectedUser && (
            <div>
              <h2>{selectedUser.lastName}</h2>
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

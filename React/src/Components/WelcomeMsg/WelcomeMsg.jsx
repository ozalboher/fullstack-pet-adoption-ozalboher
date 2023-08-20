import { useState, useEffect } from "react";
import { usersApi } from "helpers/usersApi";
import "./WelcomeMsg.css";

export const WelcomeMsg = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [userFullName, setUserFullName] = useState("");

  const getUserFullName = async () => {
    try {
      const fullName = await usersApi.getName();
      setUserFullName(fullName);
    } catch (err) {
      console.log(err); 
    }
  };
  useEffect(() => {
    getUserFullName();
    // Get local time
    const userTime = new Date();

    // Get time zone offset in minutes
    const timeZoneOffsetMinutes = userTime.getTimezoneOffset();

    // Adjust the time based on the time zone offset
    const adjustedTime = new Date(
      userTime.getTime() - timeZoneOffsetMinutes * 60 * 1000
    );

    // Get the current hour from the adjusted time
    const currentHour = adjustedTime.getHours();

    // Set the welcome message based on the current hour
    if (currentHour >= 5 && currentHour < 12) {
      setWelcomeMessage("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setWelcomeMessage("Good afternoon");
    } else {
      setWelcomeMessage("Good evening");
    }
  }, []);

  return (
    <>
      <div className="welcome-container">
        <h1 className="welcome-text">{welcomeMessage+" "+userFullName}</h1>
      </div>
    </>
  );
};

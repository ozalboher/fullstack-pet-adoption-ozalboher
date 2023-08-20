import React from "react";
import { Center } from "UIKit";
export const About = () => {
  return (
    <>
      <Center>
        <p>
          This Pet-Adoption web application was developed by Oz Alboher as part
          of the ITC Fullstack Program, leveraging the knowledge I acquired in
          HTML, CSS, and JavaScript, React, NodeJs, Express, SQL, REST API'S &
          GIT.
        </p>
      </Center>
    </>
  );
};

/* 
import { getStorageIsLogin, getStorageUser, clearStorageUser } from "../Auth/storage"
export const About = () =>{
    const handleClick1 = () =>{
        console.log(getStorageIsLogin());
    }
    const handleClick2 = () =>{
        console.log(getStorageUser());
    }
    const handleClick3 = () =>{
        console.log(clearStorageUser());
    }
    return(
        <>
        <div><h1>About Page</h1></div>
        <button onClick={handleClick1}>check is login</button>
        <button onClick={handleClick2}>get token</button>
        <button onClick={handleClick3}>clear local storage(log out)</button>
        </>
    )
} */

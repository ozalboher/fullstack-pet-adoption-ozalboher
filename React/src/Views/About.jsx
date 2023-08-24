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


/* import { getStorageIsLogin, getStorageUser, clearStorageUser } from "../Auth/storage"
import { getStorageAdmin, getStorageIsAdmin, clearStorageAdmin } from "../Auth/storage";
export const About = () =>{
    const handleClick1 = () =>{
        console.log(getStorageIsLogin());
        console.log(process.env.ADMIN);
        console.log(process.env.REACT_APP_API_PORT);
    }
    const handleClick2 = () =>{
        console.log(getStorageUser());
    }
    const handleClick3 = () =>{
        console.log(clearStorageUser());
    }
    const handleClick4 = () =>{
      console.log(getStorageIsAdmin());
  }
  const handleClick5 = () =>{
      console.log(getStorageAdmin());
  }
  const handleClick6 = () =>{
      console.log(clearStorageAdmin());
  }
    return(
        <>
        <div><h1>About Page</h1></div>
        <button onClick={handleClick1}>check is login?</button>
        <button onClick={handleClick2}>get token</button>
        <button onClick={handleClick3}>clear local storage(log out)</button>
        <button onClick={handleClick4}>check ADMIN is login</button>
        <button onClick={handleClick5}>get ADMIN token</button>
        <button onClick={handleClick6}>clear ADMIN local storage(log out)</button>
        </>
    )
}
 */
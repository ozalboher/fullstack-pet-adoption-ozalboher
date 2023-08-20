import { useContext, useEffect } from "react";
import { CenterUp } from "UIKit";
import { WelcomeMsg } from "Components/WelcomeMsg/WelcomeMsg";
import { authContext } from "Auth/authContext";
import { getStorageIsLogin, getStorageUser, clearStorageUser } from "../Auth/storage"

//HomePage CSS styles are managed at App.css
export const HomePage = () => {
  const { isLogin } = useContext(authContext);

  return (
    <>
    <div>
    <CenterUp>
      {getStorageUser() && <WelcomeMsg/>}
    </CenterUp>
    <CenterUp>
      <div className="pet-adoption-logo"></div>
    </CenterUp>
    <CenterUp>
     <div className="text-wrap">
      <h1 className="welcoming-text">Welcome to our pet adoption website, where love and companionship come together! We're thrilled to have you here, ready to embark on a heartwarming journey of finding your perfect furry friend. Browse through our wonderful selection of adorable pets, each one waiting to bring joy and happiness into your life. Whether you're seeking a playful pup, a cuddly cat, or a charming critter, our site is a gateway to finding your forever companion. So, dive in, explore, and let your heart be captivated by the enchanting world of pet adoption. We can't wait to help you create a lifelong bond that will fill your days with love and cherished memories.</h1>
    </div>
    </CenterUp>
    </div>
    </>
  );
};

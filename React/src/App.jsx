import { NavLink, Route, Routes, Redirect } from "react-router-dom";
import { React, useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPaw,
  faRightToBracket,
  faCircleInfo,
  faMagnifyingGlass,
  faUserXmark,
  faIdBadge,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import { usersApi } from "helpers/usersApi";
import { NavBar, Line, Between, Grid, Center, Modal } from "UIKit";
import { getStorageIsLogin, clearStorageUser, getStorageAdmin, clearStorageAdmin } from "./Auth/storage"
import { HomePage } from "Views/HomePage";
import { About } from "Views/About";
import { Login } from "Components/Login/Login";
import { SignUp } from "Components/SignUp/SingUp";
import { SearchPage } from "Views/SearchPage/SearchPage";
import { PetPage } from "Views/PetPage/PetPage";
import { MyPetsPage } from "Views/MyPetsPage/MyPetsPage";
import { authContext } from "Auth/authContext";
import { AuthRoute } from "Auth/AuthRoute";
import { ProfilePage } from "Views/ProfilePage/ProfilePage";
import { AdminPage } from "Views/AdminPage/AdminPage";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const { logUserOut } = useContext(authContext);
  const { isAdmin } = useContext(authContext);

  useEffect(() => {
    showModal && setShowLogin(true);
  }, [showModal]);



  const handleModal = () => {
    setShowModal(!showModal);
  };
  const logOutUser = () => {
    logUserOut();
    clearStorageUser();
    clearStorageAdmin();
    window.location.reload();
  }

  return (
    <div className="App">
      <Grid>
        <header>
          <NavBar>
            <Between>
              <Line>
                <NavLink to="/home"><FontAwesomeIcon icon={faHouse} title="Home-Page" /></NavLink>
                <NavLink to="/search"> <FontAwesomeIcon icon={faMagnifyingGlass} title="Search-Page" /></NavLink>
              </Line>
              {(getStorageIsLogin()) && <NavLink to="/myPetsPage"><FontAwesomeIcon icon={faPaw} title="My-Pets-Page"/> </NavLink> }
              <Line>
                {(getStorageAdmin()) && <NavLink to="/admin-page"><FontAwesomeIcon icon={faScrewdriverWrench} title="Admin-Page"/></NavLink>}
                {!(getStorageIsLogin()) && <div className="clickable" onClick={handleModal} title="log-in"><FontAwesomeIcon icon={faRightToBracket} /></div>}
                {(getStorageIsLogin()) && <NavLink to="/profile"><FontAwesomeIcon icon={faIdBadge}  title="Profile-Settings"/></NavLink>}
                {(getStorageIsLogin()) && <div className="clickable" onClick={logOutUser} title="log-out"><FontAwesomeIcon icon={faUserXmark} /></div>}
                <NavLink to="/about"><FontAwesomeIcon icon={faCircleInfo} title="About-Page"/></NavLink>
                
              </Line>
            </Between>
          </NavBar>
        </header>
    
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/petPage/:itemId" element={<PetPage />} />
            <Route path="/myPetsPage" element={<AuthRoute elem={MyPetsPage} />} />
            <Route path="/profile" element={<AuthRoute elem={ProfilePage} />} />
            {(getStorageAdmin()) && <Route path="/admin-page" element={<AuthRoute elem={AdminPage} />} />}
          </Routes>
          {showModal && (
            <Modal showModal={showModal} setShowModal={setShowModal} >
              {showLogin && (
                <Login showLogin={showLogin} setShowLogin={setShowLogin} showSuccessMsg={showSuccessMsg} setShowSuccessMsg={setShowSuccessMsg} setShowModal={setShowModal} />
              )}
              <SignUp showLogin={showLogin} setShowLogin={setShowLogin} setShowSuccessMsg={setShowSuccessMsg} />
            </Modal>
          )}
        </section>

        <footer>
          <Center>
            <h4>PET ADOPTION PROJECT | OZ ALBOHER</h4>
          </Center>
        </footer>
      </Grid>
    </div>
  );
};

export default App;

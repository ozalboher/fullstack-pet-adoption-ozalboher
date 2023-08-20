import React from "react";
import { useState, useRef } from "react";
import { usersApi } from "helpers/usersApi";
import { Msg } from "UIKit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
export const SignUp = ({ showLogin, setShowLogin, setShowSuccessMsg }) => {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);


  const handleShowPass1 = () => {
    setShowPass1(!showPass1);
  };
  const handleShowPass2 = () => {
    setShowPass2(!showPass2);
  };
  const handleLogInLink = () => {
    setShowLogin(!showLogin);
  };
  

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState('');
  
  
  const handleRegister = (e) => {
    console.log("register");
    
    e.preventDefault(); // Prevent the default form submit event, (which reloads the page).
    if (password1 !== password2) {
        setError('Passwords do not match');
        return;
    }
    else if (!email || !password1 || !password2 || !firstName || !lastName || !phoneNumber) {
      return;
  }
   setError('');
      usersApi.registerUser(
        {
          email: email,
          password: password1,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber
        }
      )
      
      .then(resp => {
        setShowSuccessMsg(true);
        setTimeout(() => {
          setShowSuccessMsg(false);
        }, 2000);
        handleLogInLink();
    }) .catch((error) => {
        setError(error.response.data);
        
    });
  };
  
  return (
    <>   
      <div className="login-wrapper">
        <div className="login-card">
          <div className="form login">
            <div className="form-content">
              <span className="login-title">Sign Up</span>
              <form onSubmit={handleRegister}> 
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} required />
              </div>
              <div className="field input-field">
                <input
                  type={showPass1 ? "text" : "password"}
                  placeholder="Password"
                  className="password"
                  value={password1}
                  onChange={(e)=> setPassword1(e.target.value)}
                  required
                />
                {showPass1 && <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={handleShowPass1}/>}
                {!showPass1 && <FontAwesomeIcon icon={faEyeSlash} className="eye-icon"  onClick={handleShowPass1}/>}
              </div>
              <div className="field input-field">
                <input
                  type={showPass2 ? "text" : "password"}
                  placeholder="Retype Password"
                  className="password"
                  value={password2}
                  onChange={(e)=> setPassword2(e.target.value)}
                  required
                />
                {showPass2 && <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={handleShowPass2}/>}
                {!showPass2 && <FontAwesomeIcon icon={faEyeSlash} className="eye-icon"  onClick={handleShowPass2}/>}
              </div>

              <div className="field input-field">
                <input type="text" placeholder="First Name" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
              </div>

              <div className="field input-field">
                <input type="text" placeholder="Last Name" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
              </div>

              <div className="field input-field">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={phoneNumber}
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="field button-field">
                <button>Register</button>
              </div>
              </form>
              {error && <Msg msg={error} isError={true} />}
              <div className="line"></div>
              <div className="form-link">
                <span>
                  Already registered?{" "}
                  <a
              
                    className="link signup-link"
                    onClick={handleLogInLink}
                  >
                    Login
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

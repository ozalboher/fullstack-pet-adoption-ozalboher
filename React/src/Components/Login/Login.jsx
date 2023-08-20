import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import { Msg } from "UIKit";
import { useState, useContext } from "react";
import { authContext } from "Auth/authContext";
import { useNavigate } from 'react-router-dom';
import { usersApi } from "helpers/usersApi";
import axios from "axios";
import { setStorageAdmin } from "Auth/storage";

export const Login = ({showLogin, setShowLogin, showSuccessMsg, setShowModal}) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logUserIn, logAdminIn } = useContext(authContext);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleSignUpLink = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
        return;
    }
    axios.post(process.env.REACT_APP_API_PORT + 'auth/login', {
        email,
        password
    }).then(resp => {
        logUserIn(resp.data.access_token);
        checkIfUserIsAdmin();
        setShowModal(false);
        navigate('/home');

    }).catch(err => {
        setError(err.response.data)
    })
    const checkIfUserIsAdmin = async () => {
      try {
        const resp = await usersApi.getUserInfo();
        console.log(resp.role);
         if (resp.role === "admin") {
          logAdminIn(true);
        } 
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
}
  
  return (
    <>
      <div className="login-wrapper">
        <div className="login-card">
          <div className="form login">
            <div className="form-content">
            {showSuccessMsg && <Msg msg={'User Successfuly Registered!'} isError={false} />}
            {error && <Msg msg={error} isError={true} />}
              <span className="login-title">Login</span>
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" onChange={(e)=>setEmail(e.target.value)} />
              </div>

              <div className="field input-field">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {showPass && <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={handleShowPass}/>}
                {!showPass && <FontAwesomeIcon icon={faEyeSlash} className="eye-icon"  onClick={handleShowPass}/>}
              </div>

              <div className="form-link" >
                <a href="/home" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div className="field button-field">
                <button onClick={handleLogin}>Login</button>
              </div>
              <div className="line"></div>
              <div className="form-link">
                <span>
                  Don't have an account?{" "}
                  <a className="link signup-link" onClick={handleSignUpLink}>
                    Signup
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

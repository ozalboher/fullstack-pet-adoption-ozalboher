import { createContext, useState } from "react";
import { getStorageUser, setStorageUser, clearStorageUser } from "./storage";
import { getStorageAdmin, setStorageAdmin, clearStorageAdmin } from "./storage";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
const Provider = authContext.Provider;

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(getStorageUser() !== null); // true or false
  const [isAdmin, setIsAdmin] = useState(getStorageAdmin() !== null); // true or false
  const navigate = useNavigate();
  //////////////////////USER/////////////////////
  const logUserIn = (id) => {
    setIsLogin(true);
    setStorageUser(id);
    /* navigate('/about'); */
  };
  const logUserOut = () => {
    setIsLogin(false);
    clearStorageUser();
    /* navigate('/login'); */
  };

  //////////////////////ADMIN/////////////////////
  const logAdminIn = (id) => {
    setIsAdmin(true);
    setStorageAdmin(id);

  };
  const logAdminOut = () => {
    setIsAdmin(false);
    clearStorageAdmin();
 
  };
  const value = {
    isLogin,
    logUserIn,
    logUserOut,
    isAdmin,
    logAdminIn,
    logAdminOut
  };

  return <Provider value={value}>{children}</Provider>;
};

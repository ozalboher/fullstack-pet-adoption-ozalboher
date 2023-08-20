const USER_ID = 'user_id';

export const getStorageUser = () =>{
    return localStorage.getItem(USER_ID); // if no user is logged in, it will return null(which means there is nothing under the key user_id inside the local storage)
}
export const getStorageIsLogin = () =>{
    return localStorage.getItem(USER_ID) !== null; // will return true or false if the user is logged in or not
}
export const setStorageUser = (id) =>{ // inside local storage we will have a key called user_id and the value will be the id(converted by JWT as a token)
    localStorage.setItem(USER_ID, id);
}
export const clearStorageUser = () =>{
    localStorage.removeItem(USER_ID);
}



const ADMIN_ID = 'admin_id';

export const getStorageAdmin = () =>{
    return localStorage.getItem(ADMIN_ID); 
}
export const getStorageIsAdmin = () =>{
    return localStorage.getItem(ADMIN_ID) !== null; 
}
export const setStorageAdmin = (id) =>{ 
    localStorage.setItem(ADMIN_ID, id);
}
export const clearStorageAdmin = () =>{
    localStorage.removeItem(ADMIN_ID);
}





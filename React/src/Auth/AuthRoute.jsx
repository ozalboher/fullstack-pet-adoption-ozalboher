import { useContext } from "react";
import { authContext } from "./authContext";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ elem: Elem }) => {
    const { isLogin } = useContext(authContext);


    if (!isLogin) {
        return (
            <Navigate to='/home' />
        )
    }

    return <Elem />
}
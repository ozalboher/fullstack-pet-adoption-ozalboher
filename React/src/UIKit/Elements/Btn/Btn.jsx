import React from "react";
import "./Btn.css";

export const Btn = ({name, onClick}) => {
    return (
        <>
        <div className="btn-wrap"></div>
        <button onClick={onClick} className="Btn">{name}</button>
        </>
    );
};
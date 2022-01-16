import React, { useState } from "react";
// import { EventContext } from "../event/EventProvider";

export const GamerContext = React.createContext();

export const GamerProvider = (props) => {
    const [currentGamer, setCurrentGamer] = useState({});

    const getCurrentGamer = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setCurrentGamer);
    };

    // const createGamer = (event) => {
    //     return fetch(`http://localhost:8000/gamers`, {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Token ${localStorage.getItem("lu_token")}`,
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(event)
    //     })
    //         .then((response) => response.json())
    //         .then(getGamers)
    // };

    return (
        <GamerContext.Provider value={{ currentGamer, getCurrentGamer }}>
            {props.children}
        </GamerContext.Provider>
    );
};
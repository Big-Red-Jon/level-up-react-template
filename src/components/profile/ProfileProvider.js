import React, { useState } from "react";
import { EventContext } from "../event/EventProvider";

export const ProfileContext = React.createContext();

export const ProfileProvider = (props) => {
    const [profiles, setProfiles] = useState([]);

    const getProfiles = () => {
        return fetch("http://localhost:8000/profiles", {
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setProfiles);
    };

    const createProfile = (event) => {
        return fetch(`http://localhost:8000/profiles`, {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then((response) => response.json())
            .then(getProfiles)
    };

    return (
        <EventContext.Provider value={{ profiles, getProfiles, createProfile }}>
            {props.children}
        </EventContext.Provider>
    );
};
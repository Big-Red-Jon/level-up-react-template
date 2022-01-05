import React, { useState } from "react";
// const [gameTypes, setTypes] = useState([]);

export const GameContext = React.createContext();

export const GameProvider = (props) => {
    const [games, setGames] = useState([]);
    const [gameTypes, setGametypes] = useState([]);

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setGames);
    };


    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
            method: "Post",
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
            // .then((response) => response.json())
            .then(getGames);
    };

    const getGameTypes = () => {
        return fetch("http://localhost:8000/games", {
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setGametypes);
    };

    return (
        <GameContext.Provider value={{ games, getGames, createGame, gameTypes, getGameTypes }}>
            {props.children}
        </GameContext.Provider>
    );

};
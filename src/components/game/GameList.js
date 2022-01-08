import React, { useContext, useEffect } from "react";
import { GameContext } from "./GameProvider.js";
// import Button from "react-bootstrap";
import { useHistory } from "react-router-dom"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext);
    const history = useHistory()

    useEffect(() => {
        getGames();
    }, []);

    <button
        className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push({ pathname: "/games/new" });
        }}
    >
        Register New Game
    </button>

    return (
        <>
            <article className="games">
                {games.map((game) => {
                    return (
                        <section key={`game--${game.id}`} className="game">
                            <div className="game__title">
                                {game.title} by {game.maker}
                            </div>
                            <div className="game__players">
                                {game.number_of_players} players needed
                            </div>
                            <div className="game__skillLevel">
                                Skill level is {game.skill_level}
                            </div>
                        </section>
                    );
                })}
            </article>
            <div>
                <button variant="" size="" className="" onClick={() => history.push("/games/new")}>
                    Add New Game
                </button>{' '}
            </div>
        </>
    );
};
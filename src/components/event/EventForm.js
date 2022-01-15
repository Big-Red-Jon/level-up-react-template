import React, { useContext, useState, useEffect, useRef, createElement } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../game/GameProvider";
import { EventContext } from "./EventProvider";


export const EventForm = () => {
    const history = useHistory();
    const { games, getGames } = useContext(GameContext)
    const { createEvent } = useContext(EventContext);


    // const currentUser = localStorage.getItem("lu_token")

    const [currentEvent, setEvent] = useState({
        organizer: 1,
        description: "",
        game: 0,
        date: "",
        time: ""
    });

    useEffect(() => {
        getGames()
    }, []);


    const changeEventState = (domEvent) => {
        const newEventState = { ...currentEvent };
        newEventState.description = domEvent.target.value;
        setEvent(newEventState);
    };

    const changeGameState = (domEvent) => {
        const newEventState = { ...currentEvent };
        newEventState.game = domEvent.target.value;
        setEvent(newEventState);
    };

    const changeDateState = (domEvent) => {
        const newEventState = { ...currentEvent };
        newEventState.date = domEvent.target.value;
        setEvent(newEventState)
    };

    const changeTimeState = (domEvent) => {
        const newEventState = { ...currentEvent };
        newEventState.time = domEvent.target.value;
        setEvent(newEventState)
    };


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select
                        name="gameId"
                        className="form-control"
                        value={currentEvent.gameId}
                        onChange={changeGameState}
                    >
                        <option value="0">Select a game...</option>
                        {games.map((game) => (
                            <option
                                key={game.id}
                                value={game.id}
                            >
                                {game.title}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="Description"
                        required
                        autoFocus
                        className="form-control"
                        value={currentEvent.description}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="date">Date: </label>
                <input
                    type="date"
                    name="date"
                    required
                    autoFocus
                    className="form-control"
                    onChange={changeDateState}
                    value={currentEvent.date}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="time">Time of Event: </label>
                <input
                    type="time"
                    name="time"
                    required
                    autoFocus
                    className="form-control"
                    onChange={changeTimeState}
                    value={currentEvent.time}
                />
            </fieldset>

            {/* Create the rest of the input fields */}

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    // Create the event
                    const event = {
                        // organizer: currentUser,
                        description: currentEvent.description,
                        game: parseInt(currentEvent.game),
                        date: currentEvent.date,
                        time: currentEvent.time,
                    };

                    createEvent(event).then(() => history.push("/events"));
                    // Once event is created, redirect user to event list
                }}
                className="btn btn-primary"
            >
                Create Event
            </button>
        </form>
    );
};
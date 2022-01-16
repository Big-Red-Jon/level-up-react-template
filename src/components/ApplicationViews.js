import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js";
import { EventList } from "./event/EventList.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventProvider } from "./event/EventProvider.js";
import { GameForm } from "./game/GameForm.js";
import { EventForm } from "./event/EventForm.js";
// import { GamerProvider } from "./gamer/GamerProvider.js";


export const ApplicationViews = () => {
    return (
        <>
            <main
                style={{
                    margin: "5rem 2rem",
                    lineHeight: "1.75rem",
                }}
            >
                {/* <GamerProvider> */}
                <GameProvider>
                    <EventProvider>
                        <Route exact path="/events">
                            <EventList />
                        </Route>
                        <Route exact path="/events/new">
                            <EventForm />
                        </Route>
                        <Route exact path="/games/new">
                            <GameForm />
                        </Route>
                        <Route exact path="/games">
                            <GameList />
                        </Route>
                    </EventProvider>
                </GameProvider>
                {/* </GamerProvider> */}
            </main>
        </>
    );
};
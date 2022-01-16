import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import { useHistory } from "react-router-dom";
import "./Events.css";

export const EventList = () => {
    const history = useHistory();
    const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext);

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button
                    className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" });
                    }}
                >
                    Schedule New Event
                </button>
            </header>
            {events.map((event) => {
                return (
                    <section key={event.id} className="registration">
                        <div className="registration__game">{event.game.title}</div>
                        <div>{event.description}</div>
                        <div>
                            {event.date} @ {event.time}
                        </div>
                        {event.joined ? (
                            <button
                                className="btn btn-3"
                                onClick={() => leaveEvent(event.id)}
                            >
                                Leave
                            </button>
                        ) : (
                            <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
                                Join
                            </button>
                        )}
                    </section>
                );
            })}
        </article>
    );
};





//Before Chapter 12 Below with Profile Fixes

// import React, { useContext, useEffect } from "react";
// import { EventContext } from "./EventProvider.js";
// import { GamerContext } from "../gamer/GamerProvider.js";
// import { useHistory } from "react-router-dom";
// import "./Events.css";

// export const EventList = () => {
//     const { events, getEvents, joinEvent } = useContext(EventContext);
//     const { currentGamer, getCurrentGamer } = useContext(GamerContext);

//     const history = useHistory();

//     useEffect(() => {
//         getEvents();
//         getCurrentGamer();
//     }, []);




//     return (
//         <article className="events">
//             <header className="events__header">
//                 <h1>Level Up Game Events</h1>
//                 <button
//                     className="btn btn-2 btn-sep icon-create"
//                     onClick={() => {
//                         history.push({ pathname: "/events/new" });
//                     }}>
//                     Schedule New Event
//                 </button>
//             </header>
//             {/* Profile is a many to many gamer. The gamer will be the profile. */}
//             {events.map((event) => {
//                 const attending = currentGamer.attending.some((evt) => evt.id === event.id);
//                 return (
//                     <section key={event.id} className="registration">
//                         <div className="registration__game">{event.game.title}</div>
//                         <div>{event.description}</div>
//                         <div>
//                             {event.date} @ {event.time}
//                         </div>
//                         <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
//                             Join
//                         </button>
//                     </section>
//                 );
//             })}
//         </article>
//     );
// };

//Before Chapter 11 below


//     return (
//         <article className="events">
//             <header className="events__header">
//                 <h1>Level Up Game Events</h1>
//             </header>
//             {events.map((event) => {
//                 return (
//                     <section key={event.id} className="registration">
//                         <div className="registration__game">{event.game.title}</div>
//                         <div>{event.description}</div>
//                         <div>
//                             <p>{new Date(event.date).getUTCFullYear()}-{new Date(event.date).getUTCMonth() + 1}-{new Date(event.date).getUTCDate()}</p>
//                             {new Date(event.date).toLocaleDateString("en-US", {
//                                 weekday: "long",
//                                 year: "numeric",
//                                 month: "long",
//                                 day: "numeric",
//                             })}
//                             @ {event.time}
//                         </div>
//                     </section>
//                 );
//             })}
//             <div>
//                 <button variant="" size="" className="" onClick={() => history.push("/events/new")}>
//                     Add New Event
//                 </button>{' '}
//             </div>
//         </article>
//     );
// };
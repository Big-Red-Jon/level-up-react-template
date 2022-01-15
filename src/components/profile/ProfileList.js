import React, { useContext, useEffect } from "react";
import { ProfileContext } from "./ProfileProvider.js";
import { useHistory } from "react-router-dom";
import "./Profile.css"

export const ProfileList = () => {
    const history = useHistory();
    const { profiles, createProfile } = useContext(ProfileContext);

    useEffect(() => {
        getProfiles();
    }, []);

    return (
        <article>
            <header className="profiles__header">
                <h1>Profiles</h1>
                <button
                    className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" });
                    }}
                >
                    Create New Profile
                </button>
            </header>
            {profiles.map((profile) => {
                return (
                    <div>

                    </div>
                )
            }
            )}
        </article>

    );





}
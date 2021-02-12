import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <>
        <h1>Evil Time Traveller Robot Portal</h1>

        <div>We are totally going to kill the Space Invaders</div>
        <div>and make sure they don't save the future</div>

        <div>You should probably start <Link to="/login">here</Link>.</div>

        <div>Have a great day!</div>
    </>
);
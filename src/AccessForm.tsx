import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AccessForm = () => { 
    
    const [showSecretMessage, setShowSecretMessage] = useState(false);

    return (
    <>
        <h1>Access to secret list</h1>

        <div>This is the <span>Access to secret list</span>!</div>
        <form>
            <div>
            <label htmlFor='username'>very secret username</label>
            <input name='username' id='username' />
            </div>

            <div>
            <label htmlFor='password'>very secret password</label>
            <input type='password' name='password' id='password' />
            </div>
        </form>

        <button onClick={() => setShowSecretMessage(true)}>Submit</button>

        {showSecretMessage && (<div><Link to="/suspects">Secret Members Page</Link></div>)}
    </>
)
};
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const AccessForm = () => {

    const [username, setUsername] = useState('name');
    const [password, setPassword] = useState('password');
    const [showSecretMessage, setShowSecretMessage] = useState(false);

    const checkLogin = (): void => {
        setTimeout(() =>
            setShowSecretMessage(username === 'admin' && password === 'iloveyou'),
            1000);
    }

    return (
        <BrowserRouter>
            <h1>Access to secret list</h1>

            <div>This is the <span>Access to secret list</span> page!</div>
            <form>
                <div>
                    <label htmlFor='username'>very secret username</label>
                    <input id='username' value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='password'>very secret password</label>
                    <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            </form>

            <button onClick={() => checkLogin()}>Submit</button>

            { showSecretMessage && (<div><Link to="/team">Secret Members Page</Link></div>)}
        </BrowserRouter>
    )
};
// import logo from './logo.svg';
import Landing from './components/Landing.js';
import './App.css';
import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState('');

    if(username) {
        return <h1>Hello, {username}</h1>;
    } else {
        return (
            <div className="App">
                <Landing callback={setUsername}/>
            </div>
        );
    }

}

export default App;

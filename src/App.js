// import logo from './logo.svg';
import Landing from './components/Landing.js';
import Day from './components/Day';
import './App.css';
import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState('');

    if(username) {
        return <Day day={"Monday"}/>;
    }
    return (
            <div className="App">
                <Landing callback={setUsername}/>
            </div>
    );

}

export default App;

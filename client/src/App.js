// import logo from './logo.svg';
import Landing from './components/Landing.js';
import {Day, Notes} from './components/Day';
import './App.css';
import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState('');

    if(username) {
        return <div className={"week"}>
            <Day day={"Sunday"}/>
            <Day day={"Monday"}/>
            <Day day={"Tuesday"}/>
            <Day day={"Wednesday"}/>
            <Day day={"Thursday"}/>
            <Day day={"Friday"}/>
            <Day day={"Saturday"}/>
            <Notes />
        </div>;
    }
    return (
            <div className="App">
                <Landing callback={setUsername}/>
            </div>
    );

}

export default App;

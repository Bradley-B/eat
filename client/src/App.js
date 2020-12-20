// import logo from './logo.svg';
import Landing from './components/Landing.js';
import Week from './components/Week';
import './App.css';
import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState('');

    if(username) {
        return <Week username={username}/>
    }
    return <Landing callback={setUsername}/>;

}

export default App;

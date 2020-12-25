// import logo from './logo.svg';
import Landing from './components/Landing.js';
import Week from './components/Week';
import './App.css';
import React, { useState } from "react";

let holidays = [
    {name: "Christmas", month: "12", day: "25"},
    {name: "New\nYears", month: "1", day: "1"},
    {name: "Derek's Birthday", month: "6", day: "30"},
    {name: "Wendy & Brad's Birthday", month: "3", day: "9"},
    {name: "Mom's Birthday", month: "10", "day": "31"}
];

function App() {
    const [username, setUsername] = useState('');

    if(username) {
        return <Week username={username}/>
    }

    let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    for(let holiday of holidays) {
        if(holiday.month === month && holiday.day === day) {
            return <HolidayBanner holiday={holiday.name}>
                <Landing callback={setUsername}/>
            </HolidayBanner>
        }
    }

    return <Landing callback={setUsername}/>;
}

export default App;

function HolidayBanner(props) {
    return <>
        <div className={"banner"}>
            <div id="lock">
                <h2>Closed For {props.holiday}</h2>
            </div>
        </div>
        {props.children}
    </>
}

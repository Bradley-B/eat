import React, { useState } from 'react';
import '../styles.css';

export function Day(props) {
    const [checkboxValues, setCheckboxValues] =
        useState({"BREAKFAST": false, "LUNCH": false, "DINNER": false});

    return (<div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
                <tr>
                    <th colSpan="2">
                        {props.day}
                    </th>
                </tr>
            </thead>
            <tbody>
                <TimeRow callback={setCheckboxValues}
                         values={checkboxValues} time={"BREAKFAST"}/>
                <TimeRow callback={setCheckboxValues}
                         values={checkboxValues} time={"LUNCH"}/>
                <TimeRow callback={setCheckboxValues}
                         values={checkboxValues} time={"DINNER"}/>
            </tbody>
        </table>
    </div>);
}

function TimeRow(props) {
    return (<tr className={"time-container"}>
        <td><label>{props.time}</label></td>
        <td className={"checkbox-container"}>
            <input checked={props.values[props.time]} type="checkbox"
                   onChange={(e)=>{
                        let newState = {...props.values};
                        newState[props.time] = e.target.checked;
                        props.callback(newState);
            }}/>
        </td>
    </tr>);
}

export function Notes() {
    return <div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
            <tr><th colSpan="2">Notes</th></tr>
            </thead>
            <tbody>
            <tr><td><textarea className={"notes-textarea"}/></td></tr>
            </tbody>
        </table>
    </div>
}

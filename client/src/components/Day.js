import React, { useState } from 'react';
import '../styles.css';

const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export function Day(props) {
    const [checkboxValues, setCheckboxValues] =
        useState({"breakfast": false, "lunch": false, "dinner": false});

    return (<div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
                <tr>
                    <th colSpan="2">
                        {capitalize(props.day)}
                    </th>
                </tr>
            </thead>
            <tbody>
                <TimeRow callback={setCheckboxValues}
                         values={checkboxValues} time={"breakfast"}/>
                <TimeRow callback={setCheckboxValues}
                         values={checkboxValues} time={"lunch"}/>
                <TimeRow callback={setCheckboxValues}
                         values={checkboxValues} time={"dinner"}/>
            </tbody>
        </table>
    </div>);
}

function TimeRow(props) {
    return (<tr className={"time-container"}>
        <td><label>{props.time.toUpperCase()}</label></td>
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

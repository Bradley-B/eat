import React from 'react';
import '../styles.css';

const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export function Day(props) {
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
                <TimeRow day={props.day} callback={props.c}
                         value={props.values.breakfast} time={"breakfast"}/>
                <TimeRow day={props.day} callback={props.c}
                         value={props.values.lunch} time={"lunch"}/>
                <TimeRow day={props.day} callback={props.c}
                         value={props.values.dinner} time={"dinner"}/>
            </tbody>
        </table>
    </div>);
}

function TimeRow(props) {
    return (<tr className={"time-container"}>
        <td><label>{props.time.toUpperCase()}</label></td>
        <td className={"checkbox-container"}>
            <input checked={props.value} type="checkbox"
                   onChange={(e)=>{
                        props.callback(props.day, props.time, e.target.checked);
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

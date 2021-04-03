import React from 'react';
import '../styles.css';
import { useDispatch, useSelector } from "react-redux";
import { updateMeal } from '../redux/mealSlice';

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
                <TimeRow day={props.day} time={"breakfast"}/>
                <TimeRow day={props.day} time={"lunch"}/>
                <TimeRow day={props.day} time={"dinner"}/>
            </tbody>
        </table>
    </div>);
}

function TimeRow(props) {
    const isChecked = useSelector(state => state.meals[props.day][props.time]);
    const dispatch = useDispatch();

    return (<tr className={"time-container"}>
        <td><label>{props.time.toUpperCase()}</label></td>
        <td className={"checkbox-container"}>
            <input checked={isChecked} type="checkbox"
                   onChange={(e)=>{
                       dispatch(updateMeal(props.day, props.time, e.target.checked));
            }}/>
        </td>
    </tr>);
}

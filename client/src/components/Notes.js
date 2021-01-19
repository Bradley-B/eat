import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../redux/noteSlice";

export function Notes(props) {

    const storeText = useSelector(state => state.notes.text);
    const [notes, setNotes] = useState(storeText);

    const dispatch = useDispatch();
    const notesText = props.enabled ? notes : "saving... please wait";

    return <div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
            <tr><th colSpan="2">Notes</th></tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <textarea disabled={!props.enabled}
                              onChange={(e) => setNotes(e.target.value)}
                              className={"notes-textarea"}
                              value={notesText}/>
                </td>
                <td className={"notes-save-btn-cell"}>
                    <button disabled={!props.enabled}
                            onClick={() => dispatch(updateNotes(notes))}
                            className={"notes-save-btn"}>Save Notes</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}

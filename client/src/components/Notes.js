import React from "react";

export function Notes(props) {
    const notesText = props.enabled ? props.text : "saving... please wait";

    return <div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
            <tr><th colSpan="2">Notes</th></tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <textarea disabled={!props.enabled} onChange={props.c} className={"notes-textarea"} value={notesText}/>
                </td>
                <td className={"notes-save-btn-cell"}>
                    <button disabled={!props.enabled} onClick={props.s} className={"notes-save-btn"}>Save Notes</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}

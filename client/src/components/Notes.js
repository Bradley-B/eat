import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotesAsync, putNotesAsync, updateNotes } from "../redux/noteSlice";

export function Notes(props) {

    const error = useSelector(state => state.notes.error);
    const loading = useSelector(state => state.notes.loading);
    let storeText = useSelector(state => state.notes.text);
    const dispatch = useDispatch();

    storeText = error ? "failed to save notes" : (loading ? "loading..." : storeText);

    useEffect(()=>{
        dispatch(fetchNotesAsync(props.username));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchNotesAsync]);

    return <div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
            <tr><th colSpan="2">Notes</th></tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <textarea disabled={loading || error}
                              onChange={(e) => dispatch(updateNotes(e.target.value))}
                              className={"notes-textarea"}
                              value={storeText}/>
                </td>
                <td className={"notes-save-btn-cell"}>
                    <button disabled={loading || error}
                            onClick={() => dispatch(putNotesAsync(props.username))}
                            className={"notes-save-btn"}>Save Notes</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}

import React from 'react';
import '../styles.css';
import { Day } from "./Day";
import { Notes } from "./Notes";

const defaults = {
    "notes": "loading... please do not touch anything!",
    "monday": {"breakfast": false, "lunch": false, "dinner": false},
    "tuesday": {"breakfast": false, "lunch": false, "dinner": false},
    "wednesday": {"breakfast": false, "lunch": false, "dinner": false},
    "thursday": {"breakfast": false, "lunch": false, "dinner": false},
    "friday": {"breakfast": false, "lunch": false, "dinner": false},
    "saturday": {"breakfast": false, "lunch": false, "dinner": false},
    "sunday": {"breakfast": false, "lunch": false, "dinner": false}
};

export default class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {values: defaults, notesEnabled: true};
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.saveNotes = this.saveNotes.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    componentDidMount() {
        fetch(`/api/get/${this.props.username}`, {
            method: 'GET'
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({values: res});
        }).catch((err) => {
            console.error(err);
            let errState = defaults;
            errState.notes = "Failed to load. Sorry! Try again later.";
            this.setState({values: errState});
        });
    }

    saveDays() {
        let objectToSave = this.state.values;
        delete objectToSave.notes;
        this.save('days', objectToSave);
    }

    save(type, objectToSave) {
        return fetch(`/api/update/${type}/${this.props.username}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(objectToSave)
        }).catch((err)=>{
            console.error(err);
            alert("failed to save");
        });
    }

    handleNotesChange(e) {
        let state = this.state.values;
        state.notes = e.target.value;
        this.setState({values: state});
    }

    saveNotes() {
        this.setState({notesEnabled: false}, ()=>{
            let objectToSave = {notes: this.state.values.notes};
            this.save('notes', objectToSave).then(()=>{
                this.setState({notesEnabled: true});
            });
        });

    }

    handleCheckboxChange(day, time, isChecked) {
        let state = this.state.values;
        state[day][time] = isChecked;
        this.setState({values: state}, ()=>{
            this.saveDays();
        });
    }

    handleResetButton() {
        if(window.confirm('Reset Checkboxes?')) {
            let state = defaults;
            delete state.notes;
            this.setState({values: state}, ()=>{
                this.saveDays();
            });
        }
    }

    render() {
        return <>
            <div className={"week"}>
                <Day c={this.handleCheckboxChange} values={this.state.values.sunday} day={"sunday"}/>
                <Day c={this.handleCheckboxChange} values={this.state.values.monday} day={"monday"}/>
                <Day c={this.handleCheckboxChange} values={this.state.values.tuesday} day={"tuesday"}/>
                <Day c={this.handleCheckboxChange} values={this.state.values.wednesday} day={"wednesday"}/>
                <Day c={this.handleCheckboxChange} values={this.state.values.thursday} day={"thursday"}/>
                <Day c={this.handleCheckboxChange} values={this.state.values.friday} day={"friday"}/>
                <Day c={this.handleCheckboxChange} values={this.state.values.saturday} day={"saturday"}/>
                <Notes enabled={this.state.notesEnabled} s={this.saveNotes}
                       c={this.handleNotesChange} text={this.state.values.notes}/>
            </div>
            <br/>
            <button className={"reset-button"} onClick={this.handleResetButton}>Reset Checkboxes</button>
        </>;
    }
}

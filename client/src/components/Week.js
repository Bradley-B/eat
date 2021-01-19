import React from 'react';
import '../styles.css';
import { Day } from "./Day";
import { Notes } from "./Notes";
import { resetMeals } from "../redux/mealSlice";
import {connect} from "react-redux";

const week = class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notesEnabled: true};
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.saveNotes = this.saveNotes.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    componentDidMount() {
        // fetch(`/api/get/${this.props.username}`, {
        //     method: 'GET'
        // }).then((res)=>{
        //     return res.json();
        // }).then((res)=>{
        //     this.setState({values: res});
        // }).catch((err) => {
        //     console.error(err);
        //     let errState = defaults;
        //     errState.notes = "Failed to load. Sorry! Try again later.";
        //     this.setState({values: errState});
        // });
    }

    saveDays() {
        // let objectToSave = this.state.values;
        // delete objectToSave.notes;
        // this.save('days', objectToSave);
    }

    save(type, objectToSave) {
        // return fetch(`/api/update/${type}/${this.props.username}`, {
        //     method: 'PUT',
        //     headers: {'Content-type': 'application/json'},
        //     body: JSON.stringify(objectToSave)
        // }).catch((err)=>{
        //     console.error(err);
        //     alert("failed to save");
        // });
    }

    handleNotesChange(e) {
        // this.setState((state)=>{
        //     state.values.notes = e.target.value;
        //     return state;
        // });
    }

    saveNotes() {
        // this.setState({notesEnabled: false}, ()=>{
        //     let objectToSave = {notes: this.state.values.notes};
        //     this.save('notes', objectToSave).then(()=>{
        //         this.setState({notesEnabled: true});
        //     });
        // });
    }

    handleCheckboxChange(day, time, isChecked) {
        // this.setState((state) => {
        //     state.values[day][time] = isChecked;
        //     return state;
        // }, ()=>{
        //     this.saveDays();
        // });
    }

    handleResetButton() {
        if(window.confirm('Reset Checkboxes?')) {
            this.props.resetCheckboxes();
            //TODO save here
        }
    }

    render() {
        return <>
            <div className={"week"}>
                <Day day={"sunday"}/>
                <Day day={"monday"}/>
                <Day day={"tuesday"}/>
                <Day day={"wednesday"}/>
                <Day day={"thursday"}/>
                <Day day={"friday"}/>
                <Day day={"saturday"}/>
                <Notes enabled={this.state.notesEnabled}/>
            </div>
            <br/>
            <button className={"reset-button"} onClick={this.handleResetButton}>Reset Checkboxes</button>
        </>;
    }
};

const mapDispatchToProps = dispatch => {
  return {resetCheckboxes: () => dispatch(resetMeals())}
};

export default connect(null, mapDispatchToProps)(week);

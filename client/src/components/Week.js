import React from 'react';
import '../styles.css';
import { Day } from "./Day";

const defaults = {
    "notes": "",
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
        this.state = {values: defaults};
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:5680/api/get/${this.props.username}`, {
            method: 'GET'
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({values: res});
        });
    }

    handleNotesChange(e) {
        let state = this.state.values;
        state.notes = e.target.value;
        this.setState({values: state});
    }

    handleCheckboxChange(day, time, isChecked) {
        let state = this.state.values;
        state[day][time] = isChecked;
        this.setState({values: state});
    }

    render() {
        return <div className={"week"}>
            <Day c={this.handleCheckboxChange} values={this.state.values.sunday} day={"sunday"}/>
            <Day c={this.handleCheckboxChange} values={this.state.values.monday} day={"monday"}/>
            <Day c={this.handleCheckboxChange} values={this.state.values.tuesday} day={"tuesday"}/>
            <Day c={this.handleCheckboxChange} values={this.state.values.wednesday} day={"wednesday"}/>
            <Day c={this.handleCheckboxChange} values={this.state.values.thursday} day={"thursday"}/>
            <Day c={this.handleCheckboxChange} values={this.state.values.friday} day={"friday"}/>
            <Day c={this.handleCheckboxChange} values={this.state.values.saturday} day={"saturday"}/>
            <Notes c={this.handleNotesChange} text={this.state.values.notes}/>
        </div>;
    }
}

export function Notes(props) {
    return <div className={"day-container"}>
        <table className={"day-table"}>
            <thead>
            <tr><th colSpan="2">Notes</th></tr>
            </thead>
            <tbody>
            <tr><td><textarea onChange={props.c} className={"notes-textarea"} value={props.text}/></td></tr>
            </tbody>
        </table>
    </div>
}

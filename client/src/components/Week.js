import React from 'react';
import '../styles.css';
import {Day, Notes} from "./Day";

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

    handleCheckboxChange(day, time, isChecked) {
        console.log(day, time, isChecked);
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
            <Notes />
        </div>;
    }
}

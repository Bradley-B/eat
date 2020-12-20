import React from 'react';
import '../styles.css';
import {Day, Notes} from "./Day";

export default class Week extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(`http://localhost:5680/api/get/${this.props.username}`, {
            method: 'GET'
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
        });
    }

    render() {
        return <div className={"week"}>
            <Day day={"sunday"}/>
            <Day day={"monday"}/>
            <Day day={"tuesday"}/>
            <Day day={"wednesday"}/>
            <Day day={"thursday"}/>
            <Day day={"friday"}/>
            <Day day={"saturday"}/>
            <Notes />
        </div>;
    }
}

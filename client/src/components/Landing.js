import React from 'react';
import '../styles.css';

export default class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.callback(event.target.name);
    }

    render() {
        return <div className="landing">
            <h1>Who you be?</h1>
            <br/>
            <form className="landing-form">
                <input onClick={this.handleSubmit} name="thing1" value="Thing One" type="button"/>
                <input onClick={this.handleSubmit} name="thing2" value="Thing Two" type="button"/>
            </form>
            <br/>
        </div>;
    }
}

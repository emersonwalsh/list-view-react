import React from 'react';
import { formatDate, calculateDifferenceBetweenDates } from './../resources/util';


// todo change single click to double click

// toco calculate number of days using this.props.lastContact

export default class LastContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            daysSinceLastContact: this.calculateDaysSinceLastContact()
        };
        
        this.resetLastContactDate = this.resetLastContactDate.bind(this);
        this.calculateDaysSinceLastContact = this.calculateDaysSinceLastContact.bind(this);

    }

    resetLastContactDate() {
        let today = formatDate(new Date());

        this.setState({
            daysSinceLastContact: 0
        });
    }

    calculateDaysSinceLastContact() {
        let lastContactDate = new Date(this.props.lastContact);
        let today = new Date;

        return calculateDifferenceBetweenDates(lastContactDate, today);
    }


    render() {   
        const dateStyle = {
            cursor: 'pointer'
        };

        return (
            <div style={dateStyle}
                onClick={this.resetLastContactDate}
                title="Click to reset">
                {this.state.daysSinceLastContact} days
            </div>
        );
    }
}
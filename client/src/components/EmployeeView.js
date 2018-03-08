import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-responsive-modal';

import dateFormat from 'dateformat';


export default class Home extends Component {
    constructor() {
        super();
    }
    
    componentDidMount(){
        // call database to grab specific employee info
    }

    render() {
        return (
            <div>I am the employee view!</div>
        );
    }
}

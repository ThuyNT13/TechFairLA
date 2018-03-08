import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PersonalityCard from './PersonalityCard';
import ValuesCard from './ValuesCard';

import Modal from 'react-responsive-modal';

import dateFormat from 'dateformat';


export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            data: {},
            requestFailed: false
        };
      
    }
    
    componentDidMount() {
        var coverletterid = this.props.match.params.id;
        // call database to grab specific employee info
        fetch('https://api.mlab.com/api/1/databases/techfairla/collections/cover_letters/'+coverletterid+'?apiKey=jLU8gZbBNTd_WJSakfetWAA2XNZ8sxop')
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }
                // console.log(response);
                return response
            })
            .then(d => d.json())
            .then(d => {
              console.log(d);
              this.setState({
                data: d
              })
            }, () => {
              this.setState({
                requestFailed: true
              })
            })
    }

    render() {
        return (
            <div>
                Name:
                <p>{this.state.data.name}</p>
                Cover Letter:
                <p>{this.state.data.text}</p>
            </div>
        );
    }
}

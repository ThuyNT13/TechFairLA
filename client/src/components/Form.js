import React, { Component } from 'react';
import axios from 'axios';

import PersonalityCard from './PersonalityCard';
import ValuesCard from './ValuesCard';

import data from '../data/test';
import api from '../utils/api';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cvtext: '',
            file: '',
            data: ''
        }

        this.handleAnalyzeCV = this.handleAnalyzeCV.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
        const name = target.id;

        this.setState({
            [name]: value
        });
        // console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.name && this.state.cvtext) {
            api.insertCoverLetter(this.state.name, this.state.cvtext)
        }
    }

    handleAnalyzeCV() {

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Name</label>
                                <input
                                    className="form-control"
                                    id="name"
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Cover Letter textarea (100 words min)</label>
                                <textarea
                                    className="form-control"
                                    id="cvtext"
                                    rows="5"
                                    onChange={this.handleInputChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Example file input</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="cvfile"
                                    onChange={this.handleInputChange} />
                            </div>
                            <button
                                className='button'
                                type='submit'>
                                    Submit
                            </button>
                        </form>
                    </div>

                    {/* {data[0].map((data) => {
                        return <PersonalityCard traits={data.personality}/>
                    })} */}

                    <PersonalityCard traits={data[0].personality}/>
                    <ValuesCard traits={data[0].values}/>

                </div>
            </div>
        );
    }
}

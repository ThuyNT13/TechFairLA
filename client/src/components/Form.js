import React, { Component } from 'react';
import axios from 'axios';

import PersonalityCard from './PersonalityCard';
import ValuesCard from './ValuesCard';

import data from '../data/test';
import api from '../utils/api';


const styles = {
    column: {
        padding: '2rem'
    }
}

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cvtext: '',
            data: ''
        }

        this.handleAnalyzeCV = this.handleAnalyzeCV.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.name && this.state.cvtext) {
            api.insertCoverLetter(this.state.name, this.state.cvtext);

            // axios.post('https://evening-athlete.glitch.me/coverletters', {
            //     name: this.state.name,
            //     coverletter: this.state.cvtext
            //   })
            //     .then((data) => {
            //         console.log(data);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
        }
    }

    handleAnalyzeCV() {

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12" style={styles.column}>
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
                            <button
                                className='btn btn-dark'
                                type='submit'>
                                    Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-12 d-flex flex-wrap" style={styles.column}>

                    {/* {data[0].map((data) => {
                        return <PersonalityCard traits={data.personality}/>
                    })} */}

                    <PersonalityCard traits={data[0].personality}/>
                    <ValuesCard traits={data[0].values}/>

                    </div>

                </div>
            </div>
        );
    }
}

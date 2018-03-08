import React, { Component } from 'react';

import Navbar from './Navbar';

import Modal from 'react-responsive-modal';

import dateFormat from 'dateformat';

import ReactDOM from "react-dom";

export default class Home extends Component {
    constructor() {
        super();
        
        this.state = {
            open: false,
            requestFailed: false
      };
        
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

      onOpenModal() {
        this.setState({ open: true });
      };

      onCloseModal() {
        this.setState({ open: false });
    };


    componentDidMount() {
      fetch('https://api.mlab.com/api/1/databases/techfairla/collections/cover_letters?apiKey=jLU8gZbBNTd_WJSakfetWAA2XNZ8sxop')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          cvResult: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
    }
    
    updateEntry(id, data) {
        return fetch('https://api.mlab.com/api/1/databases/techfairla/collections/cover_letters?apiKey=jLU8gZbBNTd_WJSakfetWAA2XNZ8sxop/' + id, {
            method: 'PUT',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }  
    

    render() {
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.cvResult) return <p>Loading...</p>
        return (
            <div>
                <Navbar title="Personality" />
                <div className="container-fluid">
                    <div className="row">
                        <h1>Welcome Hiring Manager</h1>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-dark btn-lg analyze">Analyze a new Cover Letter</button>
                    </div>
                    <div className="row">
                        <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Favorite</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">File Name</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">View Cover Letter</th>
                                  <th scope="col">View Analysis</th>
                                </tr>
                              </thead>
                              <tbody>
            
            
                                {this.state.cvResult.map(function(cvData, index){
                                   
                                    return (
                                            <tr key={index}>
                                              <th scope="row">
                                                <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id={"favorite"+index} checked={cvData['favorite']?'checked':''}  />
                                                </div>
                                              </th>
                                              <td>{cvData['name']}</td>
                                              <td>{cvData['filename']}</td>
                                              <td>{dateFormat(cvData['date'], "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                              <td> 
                                                <div>
                                                    <button onClick={this.onOpenModal}>Open</button>
                                                </div>
                                              </td>
                                              <td> 
                
                                              </td>
                                            </tr>
                                            );
                                }, this)}
                                
                              </tbody>
                            </table>            
                                <Modal open={this.state.open} onClose={this.onCloseModal} little>
                                                      <div id="textModal"></div>
                                                    </Modal>
                    </div>
                </div>
                      JSON.stringify(this.state.cvResult)
                        onClick=window.alert(cvData['_id']['$oid'])
            </div>
            
        );
    }
}

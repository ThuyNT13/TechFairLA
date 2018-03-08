import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-responsive-modal';

import dateFormat from 'dateformat';


const styles = {
  header: {
    margin: '1rem 0'
  },
  table: {
    textAlign: 'center'
  },
  button: {
    WebkitAppearance: 'none'
  }
}


export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      requestFailed: false,
      heart: false,
        id: ''
    };

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
    
  handleToggle(event) {
    const name = event.target.id
     this.setState({
         heart: !this.state.heart,
     });
      if(this.state.heart) {
        this.setState({
          id: name
        });
      }
     console.log(event.target);
      console.log(this.state.name);
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
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center" style={styles.header}>
            <h1>Welcome Hiring Manager</h1>
            <Link to="/analyze" type="button" className="btn btn-outline-dark analyze" style={styles.button}>Analyze a new Cover Letter</Link>
          </div>
          <div className="row">
            <table className="table" style={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Favorite</th>
                  <th scope="col">Name</th>
                  <th scope="col">File Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">View CV Analysis</th>
                </tr>
              </thead>
              <tbody>


                {this.state.cvResult.map(function (cvData, index) {
                var favColor= this.state.heart?'red':'black';

                  return (
                    <tr key={index}>
                      <th scope="row">
                      <div id={"favorite"+index} style={{color: favColor}} onClick={this.handleToggle}> &hearts; </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id={"favorite" + index} checked={cvData['favorite'] ? 'checked' : ''} />
                      
                        </div>
                      </th>
                      <td>{cvData['name']}</td>
                      <td>{cvData['filename']}</td>
                      <td>{dateFormat(cvData['date'], "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                      <td>
                        <Link to="/employee-view" onClick="" className="btn btn-success">Open</Link>
                      </td>
                    </tr>
                  );
                }, this)}

              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

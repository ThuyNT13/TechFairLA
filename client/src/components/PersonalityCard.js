import React, { Component } from 'react';

import data from '../data/test';

const styles = {
    card: {
        margin: '0 1rem',
        width: '15rem'
    },
    title: {
        textTransform: 'uppercase'
    },
    body: {
        padding: '.5rem',
        border: 'none'
    },
}

export default class PersonalityCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const trait = this.props.traits;
        console.log(trait);

        return (
            <div className="col-sm-6 d-flex flex-wrap">
                {
                    trait.map((item) => {
                        return (
                            <div className="card" style={styles.card} key={item.name}>
                                <div className="card-body">
                                <h3 className="card-title" style={styles.title}>{item.name}</h3>
                                    {
                                        item.children &&
                                                item.children.map((item) => {
                                                    return (
                                                        <ul className="list-group justify-content-between flex-wrap" key={item.name}>
                                                            <div>
                                                                <li
                                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                                    style={styles.body}
                                                                >
                                                                    <div className="card-text list-trait">
                                                                        {item.name}
                                                                    </div>
                                                                    <span className="badge badge-dark">{Math.floor(item.percentile * 100) + '%'}</span>
                                                                </li>
                                                            </div>
                                                        </ul>
                                                    );
                                                })
                                    }
                                </div>
                            </div>
                        );
                    })                            
                }
            </div>
        );
    }
}

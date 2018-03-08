import React, { Component } from 'react';

import data from '../data/test';

const styles = {
    card: {
        margin: '.5rem .5rem 0 0',
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

        return (
            <div className="card d-flex" style={styles.card}>
                <div className="card-body">
                    <h3 className="card-title" style={styles.title}>{trait[0].category}</h3>
                    {
                        trait.map((item) => {
                            return (
                                <ul className="list-group justify-content-between flex-wrap">
                                        <li
                                            key={item.name}
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                            style={styles.body}
                                        >
                                            <div className="card-text list-trait">
                                                {item.name}
                                            </div>
                                            <span className="badge badge-dark">{Math.floor(item.percentile * 100) + '%'}</span>
                                        </li>
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

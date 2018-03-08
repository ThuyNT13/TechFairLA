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

        const card = trait.map((main, index) => {
            return (
                <div className="card" style={styles.card} key={main.name}>
                    <div className="card-body">
                        <h3 className="card-title" style={styles.title}>{main.name}</h3>
                        {
                            main.children &&
                            main.children.map((sub, index) => {
                                return (
                                    <ul className="list-group justify-content-between flex-wrap" key={sub.name}>
                                            <li
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                                style={styles.body}
                                            >
                                                <div className="card-text list-trait">
                                                    {sub.name}
                                                </div>
                                                <span className="badge badge-dark">{Math.floor(sub.percentile * 100) + '%'}</span>
                                            </li>
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>
            );
        })

        return card;
    }
}

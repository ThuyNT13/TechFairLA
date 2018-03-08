import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <Link to="/" className="navbar-brand" href="#">{this.props.title}</Link>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="I don't work right now" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
        );
    }
}

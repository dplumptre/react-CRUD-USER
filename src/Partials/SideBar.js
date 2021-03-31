import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = props => {

    return (
        <div>
            {props.toggle}
            <ul className={['sidebar', 'navbar-nav', props.toggle === true ? "toggled" : ''].join(' ')} >
                <li className="nav-item active">
                    <Link to="/" className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/open-account" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Open Account</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/account-status" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Account Status</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Register</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Users</span></Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
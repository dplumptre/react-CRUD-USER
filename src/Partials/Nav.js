import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props =>{




    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <Link className="navbar-brand mr-1" to="/">Ohapp</Link>
             <button className="btn btn-link btn-sm text-white order-1 order-sm-0" onClick={props.toggle}>
                <i className="fas fa-bars"></i>
            </button>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        </form>
         <ul className="navbar-nav ml-auto ml-md-0">
            <li className="my-auto text-white">
            Membership: #238977363
          </li>
          <li className="nav-item dropdown no-arrow">
             <Link  to="/" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle fa-fw"></i>
             </Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <Link className="dropdown-item" to="/" data-toggle="modal" data-target="#logoutModal">Logout</Link>
            </div>
          </li>
        </ul>
      </nav>
    )
}


export default Nav;
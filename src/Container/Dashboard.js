import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = props => {



    return (<div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>

        <div className="row">
            <div className="col-xl-6 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                        <div className="mr-5">26 New Messages!</div>
                    </div>
                    <Link to="/" className="card-footer text-white clearfix small z-1" >
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-xl-6 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                    <div className="card-body">

                        <div className="mr-5">11 New Tasks!</div>
                    </div>
                    <Link to="/" className="card-footer text-white clearfix small z-1" >
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                        </span>
                    </Link>
                </div>
            </div>


        </div>

        <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-chart-area"></i>
                   Welcome</div>

        </div>
    </div>)
}

export default Dashboard;
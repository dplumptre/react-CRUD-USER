import React from 'react';
import { Link } from 'react-router-dom';


const Register = props => {

    return (
        <div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item ">
                    <Link to="open-account">Dashboard</Link>
                </li>
                <li className="breadcrumb-item ">
                    <Link to="open-account">Register</Link>
                </li>
            </ol>





            {/* register */}

            <div className="card card-register ">
                <div className="card-body">

                    <form>
                        <div className="form-group">
                            <label >Vendor Name</label>
                            <input type="text" className="form-control" name="name" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" name="email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" name="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>
        </div>
    )
}


export default Register;
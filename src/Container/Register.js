import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyAlert from "../FormValidation/MyAlert";
import formValidation from "../FormValidation/StandardForm";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Partials/Spinner/Spinner";
import { Redirect } from "react-router-dom";
import ResponseError from "../FormValidation/ResponseError";
import { register } from "../store/reducers/Register";

const Register = (props) => {
	const v = new formValidation();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.registerReducer.registerLoading);
	const success = useSelector((state) => state.registerReducer.registerSuccess);
	const error = useSelector((state) => state.registerReducer.registerError);

	/// This is from a logged in user::

	const vendorName = "Overall Heuristic";
	const member = "OHAPP";
	const user_id = 1;

	const [state, setState] = useState({
		myForm: {
			name: "",
			role: "admin",
			vendor_name: vendorName,
			member_number: member,
			phone: "",
			email: "",
			password: "",
		},
		formErrors: {
			name: "",
			role: "",
			vendor_name: "",
			member_number: "",
			email: "",
			password: "",
			phone: "",
		},
	});

	const onchangeHandler = (event) => {
		const { name, value } = event.target;
		console.log(name, value);
		const { myForm, formErrors } = state;
		const { errorState, valueState } = v.validation(
			name,
			value,
			formErrors,
			myForm
		);
		console.log(errorState, valueState);

		let updateForm = { ...state };
		updateForm.formErrors = errorState;
		updateForm.myForm = valueState;
		setState({
			myForm: updateForm.myForm,
			formErrors: updateForm.formErrors,
		});
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		// GET  id from admin

		const formData = {
			name: state.myForm.name,
			broker_name: state.myForm.vendor_name,
			member: state.myForm.member_number,
			email: state.myForm.email,
			password: state.myForm.password,
			phone: state.myForm.phone,
			role: state.myForm.role,
			user_id: user_id,
		};
		console.log(formData);
		dispatch(register(formData));
	};

	let regForm = (
		<form>
			<div className="form-group">
				<label>Name</label>
				<input
					type="text"
					className="form-control"
					name="name"
					onChange={onchangeHandler}
				/>
				<MyAlert error={state.formErrors.name} />
			</div>
			<div className="form-group">
				<label>Vendor Name</label>
				<input
					type="text"
					className="form-control"
					name="vendor_name"
					value={state.myForm.vendor_name}
					onChange={onchangeHandler}
				/>
				<MyAlert error={state.formErrors.vendor_name} />
			</div>
			<div className="form-group">
				<label>Phone</label>
				<input
					type="text"
					className="form-control"
					name="phone"
					onChange={onchangeHandler}
				/>
				<MyAlert error={state.formErrors.phone} />
			</div>
			<div className="form-group">
				<label>Member Code</label>
				<input
					value={state.myForm.member_number}
					type="text"
					className="form-control"
					name="member_number"
					onChange={onchangeHandler}
				/>
				<MyAlert error={state.formErrors.member_number} />
			</div>
			<div className="form-group">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					name="email"
					onChange={onchangeHandler}
				/>
				<MyAlert error={state.formErrors.email} />
			</div>
			<div className="form-group ">
				<label>Roles</label>
				<select
					name="role"
					value={state.myForm.role}
					className="form-control"
					onChange={onchangeHandler}
				>
					<option value="super-admin">Super Admin</option>
					<option value="admin">Admin</option>
					<option value="user">User</option>
				</select>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					name="password"
					onChange={onchangeHandler}
				/>
				<MyAlert error={state.formErrors.password} />
			</div>
			<button
				disabled={!v.isformValid(state.myForm, state.formErrors)}
				type="submit"
				onClick={onSubmitHandler.bind(this)}
				className="btn btn-primary"
			>
				Submit
			</button>
		</form>
	);

	if (loading) {
		regForm = <Spinner />;
	}

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
					{success ? <Redirect to="/users" /> : null}
					{error ? <ResponseError error={error} /> : ""}
					{regForm}
				</div>
			</div>
		</div>
	);
};

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import formValidation from "../FormValidation/StandardForm";
import MyAlert from "../FormValidation/MyAlert";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Partials/Spinner/Spinner";
import { postAuth } from "../store/reducers/Auth";

const Login = () => {
	const v = new formValidation();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.authReducer.loading);
	const success = useSelector((state) => state.authReducer.success);
	const error = useSelector((state) => state.authReducer.error);

	const [state, setState] = useState({
		myForm: {
			email: "",
			password: "",
		},
		formErrors: {
			email: "",
			password: "",
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

		const formData = {
			email: state.myForm.email,
			password: state.myForm.password,
		};
		console.log(formData);
		dispatch(postAuth(formData));
	};

	let loginForm = (
		<div className="card card-login mx-auto mt-5">
			<div className="card-body">
				<form>
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
						className="btn btn-primary btn-block"
						onClick={onSubmitHandler.bind(this)}
					>
						Sign in
					</button>
				</form>
				<div className="text-center">
					<br />
					<Link className="d-block small" to="/login">
						Forgot Password?
					</Link>
				</div>
			</div>
		</div>
	);

	if (loading) {
		loginForm = <Spinner />;
	}

	return (
		<div className="container">
			<div className="row ">
				<div className="col-sm-10 offset-sm-1 ">{loginForm}</div>
			</div>
		</div>
	);
};

export default Login;

import React, { useState, useEffect } from "react";
import { Link ,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Partials/Spinner/Spinner";
import formValidation from "../FormValidation/StandardForm";
import MyAlert from "../FormValidation/MyAlert";
import { useLocation } from "react-router-dom";
import { getSingleUser,editUser} from "../store/reducers/Users";

const EditUser = (props) => {
	const v = new formValidation();
	const location = useLocation();
	const history = useHistory();


	const [state, setState] = useState({
		myForm: {
			name: "",
			phone: "",
			email: "",
		},
		formErrors: {
			name: "",
			phone: "",
			email: "",
		},
		myId:""
	});


	const singleUser = useSelector((state) => state.usersReducer.user);
	const dispatch = useDispatch();



	useEffect(() => {
	const myparam = location.state.params;
	console.log(myparam);

	// setState({
	// 	myId:myparam.id,
	// 	myForm:  {
	// 		name: myparam.name,
	// 		phone: myparam.phone,
	// 		email: myparam.email,
	// 	},
	// 	formErrors:{
	// 		name: "",
	// 		phone: "",
	// 		email: "",
	// 	}
	//   })



	  setState({
		...state,
		myId: myparam.id,
		myForm: {
		  ...state.myForm,
		  name: myparam.name,
		  phone: myparam.phone,
		  email: myparam.email,
		},
	  });








	//console.log(myForm);
	}, [dispatch,setState]);





	

	const onEditchangeHandler = (event) => {
		const { name, value } = event.target;
		const { myForm, formErrors } = state;
		const { errorState, valueState } = v.validation(
			name,
			value,
			formErrors,
			myForm
		);
		//console.log(errorState, valueState);

		let updateForm = { ...state };
		updateForm.formErrors = errorState;
		updateForm.myForm = valueState;
		setState({
			...state, // make sure nothing leaves
			myForm: updateForm.myForm,
			formErrors: updateForm.formErrors,
		});
	};


	const onSubmitHandlerEdit = (event) => {
		event.preventDefault();

		const payload = [{
			data : { name: state.myForm.name,phone: state.myForm.phone,email: state.myForm.email},
			id: state.myId
		}]
		console.log(payload);
		dispatch(editUser(payload));
		history.push('/');

	}









	let editFm = (
		<form>
			<div className="form-group">
			<label>Name</label>
			<input
				type="text"
				className="form-control"
				name="name"
				onChange={onEditchangeHandler}
				value={state.myForm.name}
			/>
	 <MyAlert error={state.formErrors.name} />
			</div>
			<div className="form-group">
			<label>Phone</label>
			<input
				type="text"
				className="form-control"
				name="phone"
				onChange={onEditchangeHandler}
				value={state.myForm.phone}
			/>
			</div>
			<div className="form-group">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					name="email"
					onChange={onEditchangeHandler}
					value={state.myForm.email}
				/>
			</div>


			<button
				className="btn btn-primary btn-block"
				onClick={onSubmitHandlerEdit.bind(this)}
			>
				  Edit User
			</button>
		</form>

);


	

					








	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item ">
					<Link to="open-account">Edit User</Link>
				</li>
			</ol>

			<div className="row">
		    <div className="col-md-4">
            {editFm}
		    </div>

		<div className="col-md-8">
	</div>
			</div>


			
		</div>
	);
};

export default EditUser;

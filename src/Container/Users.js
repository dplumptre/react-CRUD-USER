import React, { useState, useEffect } from "react";
import { Link ,useHistory } from "react-router-dom";
import { deleteUser,getUser, getUsers ,postUser,getSingleUser,editUser} from "../store/reducers/Users";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Partials/Spinner/Spinner";
import formValidation from "../FormValidation/StandardForm";
import MyAlert from "../FormValidation/MyAlert";




const Users = (props) => {
	const v = new formValidation();
	const history = useHistory();



	const [state, setState] = useState({
		myForm: {
			name: "",
			phone: "",
			email: "",
			password: "",
		},
		formErrors: {
			name: "",
			phone: "",
			email: "",
			password: "",
		},
		myId:""
	});


	const [editForm, setEditForm] = useState(false);
	const allUsers = useSelector((state) => state.usersReducer.users);
	const oneUser = useSelector((state) => state.usersReducer.user);
	const loading = useSelector((state) => state.usersReducer.loading);
	const postLoading = useSelector((state) => state.usersReducer.postUserloading);


	


	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);





	const onchangeHandler = (event) => {
		const { name, value } = event.target;
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



	const onSubmitHandlerEdit = (event) => {
		event.preventDefault();
		const formData = {
			id: state.myId,
			name: state.myForm.name,
			phone: state.myForm.phone,
			email: state.myForm.email,
			password: state.myForm.password,
		};
		console.log(formData);
		dispatch(editUser(formData));
	}

	const onSubmitHandler = (event) => {
		event.preventDefault();
		//console.log(state.myForm);
			const formData = {
				name: state.myForm.name,
				phone: state.myForm.phone,
				email: state.myForm.email,
				password: state.myForm.password,
			};
			dispatch(postUser(formData));
	};

	const onDeleteUser =(id)=>{
		//alert(id);
		console.log(id);
		dispatch(deleteUser(id));
    }

	const onEditUser =(param)=>{
		console.log( param);
		history.push('/edit-user',{params:param});
		
		
    }


	const onShowUser =(id)=>{
		setEditForm(false); 
		console.log('aaa'+id);
		dispatch(getSingleUser(id));
    }


	const onSwitchToAddForm =()=>{
		setEditForm(false);
    }
	



	let UserForm = (
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
						 Create User
					</button>



				</form>

	);



	


	let allusers = allUsers.map(user =>(
		<tr key={user.id}>
			<td>{user.name}</td>
			<td>{user.phone}</td>
			<td>{user.email}</td>
			<td> 
				<button onClick={()=>onShowUser(user.id)}  className="btn btn-primary">view</button>
				<button onClick={()=>onEditUser(user)} className="btn btn-warning">edit</button>
				<button onClick={()=>onDeleteUser(user.id)}  className="btn btn-danger">delete</button>
		</td>
		</tr>
	))


					


let singles = null;

if(oneUser.name != null && !editForm){
	singles = (
		<div className="alert alert-success">
		<p><strong>Name:</strong> {oneUser.name}</p>
		<p><strong>Phone:</strong> {oneUser.phone}</p>
		<p><strong>Email:</strong> {oneUser.email}</p>
		</div>
	);
}





	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item ">
					<Link to="open-account">All Users</Link>
				</li>
			</ol>

			<div className="row">
		    <div className="col-md-4">
            {UserForm}
		    </div>

		<div className="col-md-8">
          { loading ? <Spinner/>:
		  			   <table className="table">
						 <tr>
							 <td>name</td>
							 <td>phone</td>
							 <td>email</td>
							 <td>action</td>
						 </tr>
						 { postLoading? <Spinner/>:allusers}
					 </table>
		  }
	</div>
	
	
	
<div className="col-md-12 mt-3">
	{singles}
</div>

			</div>


			
		</div>
	);
};

export default Users;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserList from "../Component/user-list";
import { getUsers } from "../store/reducers/Users";
import { LoadPageReset } from "../store/reducers/Register";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Partials/Spinner/Spinner";

const Users = (props) => {
	const loading = useSelector((state) => state.usersReducer.loading);
	const allUsers = useSelector(
		(state) => state.usersReducer.users
	).map((user) => ({ ...user })); // I had to copy this in an arrray of object cos of material table
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(LoadPageReset());
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item ">
					<Link to="open-account">All Users</Link>
				</li>
			</ol>
			<div>{loading ? <Spinner /> : <UserList data={allUsers} />}</div>
		</div>
	);
};

export default Users;

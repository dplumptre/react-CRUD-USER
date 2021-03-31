import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountList from "../Component/account-list";
import { getAccount } from "../store/reducers/GetAccount";
import { getAccountStatus } from "../store/reducers/AccountStatus";
import { LoadPageResetNow } from "../store/reducers/Account";
import Spinner from "../Partials/Spinner/Spinner";
import ResponseError from "../FormValidation/ResponseError";

const AccountStatus = (props) => {
	const dispatch = useDispatch();
	const [showAlert, setShowAlert] = useState(0);
	const loadingAccountStatus = useSelector(
		(state) => state.accountStatusReducer.loadingAccount
	);
	const accountStatus = useSelector(
		(state) => state.accountStatusReducer.accountStatus
	);
	// const errorAccountStatus = useSelector(
	// 	(state) => state.accountStatusReducer.errorAccount
	// );
	const loading = useSelector((state) => state.getAccountReducer.loading);
	const error = useSelector((state) => state.getAccountReducer.error);

	const allAccount = useSelector(
		(state) => state.getAccountReducer.accounts
	).map((account) => ({ ...account })); // I had to copy this in an arrray of object cos of material table

	useEffect(() => {
		dispatch(LoadPageResetNow());
	}, []);

	useEffect(() => {
		dispatch(getAccount());
	}, [dispatch, accountStatus]); // rerender accountStatus if the status has been inserted into the database

	const showStatus = (id, refno, member) => {
		setShowAlert(id);
		console.log(id, refno, member);

		const formData = {
			id: id,
			refno: refno,
			member: member,
		};

		dispatch(getAccountStatus(formData));
	};

	const closeShowAlert = () => {
		setShowAlert(0);
	};

	let mainStatus = (
		<div>
			<table className="table table-striped table-responsive-md ">
				<tbody>
					<tr>
						<td>CHN:</td>
						<td>{accountStatus.CHN}</td>
					</tr>
					<tr>
						<td>CSCS #:</td>
						<td>{accountStatus.cscsNo}</td>
					</tr>
					<tr>
						<td>Status:</td>
						<td>{accountStatus.status}</td>
					</tr>
					<tr>
						<td>Comment:</td>
						<td>{accountStatus.comment}</td>
					</tr>
					<tr>
						<td>Ref # :</td>
						<td>{accountStatus.refNo}</td>
					</tr>
					<tr>
						<td>Response:</td>
						<td>{accountStatus.response_code}</td>
					</tr>
					<tr>
						<td>Response Message:</td>
						<td>{accountStatus.response_message}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	if (loadingAccountStatus) {
		mainStatus = <Spinner />;
	}

	let result = "";
	if (showAlert > 0) {
		result = (
			<div
				className="alert alert-warning alert-dismissible fade show m-5"
				role="alert"
			>
				<h4 className="alert-heading">Status</h4>
				{mainStatus}
				<button
					type="button"
					className="close"
					onClick={closeShowAlert}
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
	}

	let myAccountlist = <AccountList data={allAccount} showStatus={showStatus} />;
	if (loading) {
		myAccountlist = <Spinner />;
	}

	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item ">
					<Link to="open-account">Check Status</Link>
				</li>
			</ol>
			<div>
				{error ? <ResponseError error={error} /> : ""}

				{myAccountlist}
			</div>

			{result}
		</div>
	);
};

export default AccountStatus;

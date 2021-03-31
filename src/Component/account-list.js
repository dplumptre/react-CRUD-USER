import React from "react";
import MaterialTable from "material-table";
import ViewColumn from "@material-ui/icons/ViewColumn";

const AccountList = (props) => {
	return (
		<MaterialTable
			title=""
			columns={[
				{ title: "Ref #", field: "RefNo" },
				{ title: "Name", field: "Name" },
				{ title: "CHN", field: "chn" },
				{ title: "Status", field: "status" },
				{ title: "Comment", field: "comment" },
			]}
			data={props.data}
			actions={[
				{
					icon: ViewColumn,
					tooltip: "View status",
					onClick: (event, rowData) =>
						props.showStatus(rowData.id, rowData.RefNo, rowData.Member),
				},
			]}
			options={{
				actionsColumnIndex: -1,
			}}
			detailPanel={(rowData) => {
				const answers = (
					<div>
						<h5 className="pl-3 text-secondary mt-3">{rowData.Name} Details</h5>
						<ul className="list-group">
							<li className="list-group-item">NAME: {rowData.Name} </li>
							<li className="list-group-item">PHONE: {rowData.Phone1} </li>
							<li className="list-group-item">ADDRESS: {rowData.Address1} </li>
							<li className="list-group-item">EMAIL:{rowData.Email} </li>
							<li className="list-group-item">GENDER: {rowData.Gender} </li>
							<li className="list-group-item">CITY: {rowData.City} </li>
							<li className="list-group-item">COUNTRY:{rowData.Country} </li>
						</ul>
					</div>
				);
				return <div>{answers}</div>;
			}}
		/>
	);
};

export default AccountList;

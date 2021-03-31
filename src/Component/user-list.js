import React from "react";
import MaterialTable from "material-table";
import ViewColumn from "@material-ui/icons/ViewColumn";

const UserList = (props) => {
	return (
		<MaterialTable
			title=""
			columns={[
				{ title: "Brokers", field: "name" },
				{ title: "Member #", field: "member" },
				{ title: "Role(s) #", field: "member" },
			]}
			data={props.data}
			actions={[
				{
					icon: ViewColumn,
					tooltip: "Edit Role",
					onClick: (event, rowData) => {},
				},
			]}
			options={{
				actionsColumnIndex: -1,
			}}
		/>
	);
};

export default UserList;

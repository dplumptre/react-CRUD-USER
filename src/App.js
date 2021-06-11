import Footer from "./Partials/Footer";
import Nav from "./Partials/Nav";
import SideBar from "./Partials/SideBar";
import Layout from "./Partials/Layout";
import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Users from "./Container/Users";
import EditUser from "./Container/EditUsers";

function App() {
	const [toggleSideBar, setToggleSideBar] = useState(false);

	const sidebarToggleHandler = () => {
		setToggleSideBar(!toggleSideBar);
		console.log(toggleSideBar);
	};

	return (
		<div>
			<Nav toggle={sidebarToggleHandler} />
			<Layout>
				<div id="wrapper">
					<SideBar toggle={toggleSideBar} />
					<div id="content-wrapper">
						<div className="container-fluid">
							<Switch>
								<Route path="/" exact component={Users} />
								<Route path="/edit-user" component={EditUser} />
							</Switch>
						</div>
						<Footer />
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default App;

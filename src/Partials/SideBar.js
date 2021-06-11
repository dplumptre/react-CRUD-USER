import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
	const showOrHide = true;

	if (showOrHide === true) {
		return (
			<div>
				<ul
					className={[
						"sidebar",
						"navbar-nav",
						props.toggle === true ? "toggled" : "",
					].join(" ")}
				>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							<i className="fas fa-fw fa-table"></i>
							<span>Users</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="" className="nav-link">
							<i className="fas fa-fw fa-table"></i>
							<span>Comments</span>
						</Link>
					</li> 

				</ul>
			</div>
		);
	} else {
		return null;
	}
};

export default SideBar;

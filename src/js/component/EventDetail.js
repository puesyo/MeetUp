import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const EventDetail = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	let event = actions.getEventByID(id);
	let group = actions.getGroupByID(id);
	// let group = actions.addEventById(id);
	console.log(group);

	return (
		<div>
			{/* this navbar holds the title of the event detail, a group title with a link to the group detail page, and the RSVP box */}
			<nav className="navbar navbar-dark bg-dark mb-3 ">
				<div className="row navEvent">
					<div className="col" style={{ color: "white" }}>
						<p>{event.meta_keys.day}</p>
						<h4>
							{event.post_title} for {group.group_title}
						</h4>
						<Link to={"/GroupDetail/" + id}>
							<p>{group.group_title}</p>
						</Link>
					</div>
					<div className="col-3 rsvpBox" style={{ textAlign: "center", backgroundColor: "silver" }}>
						<div>People going</div>
						<div>
							<button type="button" className="btn btn-primary btn-sm">
								Login to RSVP
							</button>
						</div>
						<div>
							<i className="fab fa-twitter"></i>
							<i className="fab fa-facebook-square"></i>
						</div>
					</div>
				</div>
			</nav>

			{/* picture box */}
			<div className="container">
				<div className="row" style={{ justifyContent: "space-between" }}>
					<div className="col-8 picture">
						<h1>picture here</h1>
					</div>

					{/* description on rigth with clock logo */}
					<div className="col-2" style={{ border: "1px solid gray", height: "150px" }}>
						<div className="row">
							<div className="col-1">
								<i className="fas fa-clock"></i>
							</div>
							<div className="col">
								<ul>
									<li className="list-item">{event.meta_keys.day}</li>
									<li className="list-item">{event.meta_keys.time}</li>
									<li className="list-item">{group.post_content}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div>
					{/* this id the section with the details of the event */}
					<h3>Details</h3>
					<p>{event.post_content}</p>
				</div>
			</div>
		</div>
	);
};

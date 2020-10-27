import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardEvent } from "../component/CardEvent.js";

export const GroupDetail = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	let group = actions.getGroupByID(id);
	let event = actions.getEventByID(id);
	let a = actions.addEventById(id);
	console.log(a);

	return (
		<div>
			{/* This is a navbar with a picture, group title, location description */}
			<nav className="navbar navbar-dark bg-dark mb-3 ">
				<div className="row navEvent">
					<div
						className="col-5"
						style={{ padding: "20px", height: "300px", backgroundColor: "silver", marginLeft: "17px" }}>
						<h1>Group Picture!</h1>
					</div>
					<div className="col-5 " style={{ textAlign: "left", color: "white" }}>
						<h2>{group.group_title}</h2>
						<br></br>
						<p>Location</p>
						<h4>Miami, FL</h4>
					</div>
				</div>
			</nav>
			<div className="container" style={{ textAlign: "center" }}>
				<h3>Next Events</h3>
				{a.map((events, index) => (
					<CardEvent key={index} events={events} />
					// <h1 key={index}>camilo</h1>
				))}
			</div>
		</div>
	);
};

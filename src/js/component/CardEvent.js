import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardEvent = props => {
	const { store, actions } = useContext(Context);
	let id = props.events.meta_keys._groupId;
	let date = props.events.meta_keys.day;
	let eventTitle = props.events.post_title;
	let time = props.events.meta_keys.time;

	const groups = actions.getGroups();
	let group = actions.getGroupByID(id);
	// console.log(group.group_title);
	return (
		//<h1>This is cardEvent {props.events.meta_keys.day}</h1>
		<ul>
			<li className=" justify-content-center" style={{ listStyle: "none" }}>
				<div style={{ textAlign: "left", display: "inline-flex" }}>
					<div className="card bg-light mb-3" style={{ width: "22rem" }}>
						<div className="card-header">{date}</div>
						<div className="card-body row">
							<div className="col-4" style={{ margin: "auto" }}>
								<h5>{time}</h5>
							</div>
							<div className="col">
								<h5 className="card-title">
									<Link to={"/EventDetail/" + id}>
										<span>{eventTitle}</span>
									</Link>
								</h5>
								<p className="card-text">Group: {group.group_title}</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
};

CardEvent.propTypes = {
	events: PropTypes.object
};

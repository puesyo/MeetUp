import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { CardEvent } from "../component/CardEvent.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			{/* this is a navBar that includes the title of the home page                                                  -----NAV_BAR-----*/}
			<nav className="navbar navbar-dark bg-dark mb-3 justify-content-center">
				<div style={{ color: "white" }}>
					<h4>The Meetup Clone</h4>
				</div>
			</nav>
			{store.events.map((events, index) => (
				<CardEvent key={index} events={events} />
			))}
		</div>
	);
};

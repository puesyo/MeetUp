import React from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
	return (
		<div>
			<form>
				<input type="label" id="login" className="fadeIn second" name="login" value="Login" />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
				<input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
				<input type="submit" className="fadeIn fourth" value="Log In" />
			</form>
		</div>
	);
};

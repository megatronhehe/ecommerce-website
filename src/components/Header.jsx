import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="text-rose-200 bg-rose-900 px-12  text-center pt-3 sm:flex justify-between items-center sm:pt-0 ">
			<Link to="/">
				<h1 className="text-3xl tracking-widest">iregal</h1>
			</Link>
			<ul className="py-8 flex justify-between w-full sm:w-64">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/categories">
					<li>Categories</li>
				</Link>
				<Link to="/cart">
					<li>Cart</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Header;

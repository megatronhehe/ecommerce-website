import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex items-center justify-between h-56 px-2 bg-gray-700 md:px-24 text-rose-100">
			<div className="pr-12 border-r-2 border-rose-700">
				<h1 className="mb-8 text-2xl tracking-widest border-b-4 border-b-3 border-rose-900 drop-shadow-lg">
					whatevs
				</h1>
				<ul className="text-sm">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/categories">
						<li>Products</li>
					</Link>
					<Link to="/cart">
						<li>Cart</li>
					</Link>
					<Link to="/">
						<li>Contact</li>
					</Link>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center h-full text-sm">
				<h1 className="tracking-widest text-md">whatevs</h1>
				<p className="">whatever works to be honest</p>
				<a
					target="_blank"
					href="https://github.com/megatronhehe"
					className="mt-12 text-gray-500"
				>
					made by satya.dev - react.js frontend solo project :)
				</a>
			</div>
			<div></div>
		</div>
	);
};

export default Footer;

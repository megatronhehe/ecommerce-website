import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Header = () => {
	const { cart, countCart } = useContext(Context);

	return (
		<nav className="items-center justify-between px-6 pt-3 text-center text-rose-200 bg-rose-900 sm:flex sm:pt-0 ">
			{/* ignore this ul, theyre here so the color can render*/}
			<ul className="hidden">
				<li className="bg-rose-900"></li>
				<li className="bg-blue-800"></li>
				<li className="bg-black"></li>
				<li className="bg-gray-600"></li>
			</ul>

			<Link to="/">
				<h1 className="text-3xl tracking-widest">whatevs</h1>
			</Link>
			<ul className="flex items-center justify-between w-full py-8 sm:w-64">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/categories">
					<li>Categories</li>
				</Link>
				<Link to="/cart">
					<li className="flex justify-between w-24 p-2 border rounded-lg border-rose-100">
						<p className="pr-6 border-r border-rose-100">Cart</p>
						<p className="mr-1 font-bold">
							{cart.length > 0 ? countCart() : 0}
						</p>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Header;

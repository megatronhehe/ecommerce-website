import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Header = () => {
	const { cart, countCart } = useContext(Context);

	return (
		<nav className="items-center justify-between px-12 pt-3 text-center text-rose-200 bg-rose-900 sm:flex sm:pt-0 ">
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
			<ul className="flex justify-between w-full py-8 sm:w-64">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/categories">
					<li>Categories</li>
				</Link>
				<Link to="/cart">
					<li>
						Cart
						{cart.length > 0 && (
							<span className="px-3 ml-2 text-sm font-bold bg-white rounded-full text-rose-900">
								{countCart()}
							</span>
						)}
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Header;

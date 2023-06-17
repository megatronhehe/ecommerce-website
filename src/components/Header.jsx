import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Header = () => {
	const { cart } = useContext(Context);

	const countCart = () => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity));
		return total;
	};

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
					<li>
						Cart
						{cart.length > 0 && (
							<span className="bg-white text-rose-900 ml-2 px-3 rounded-full font-bold text-sm">
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

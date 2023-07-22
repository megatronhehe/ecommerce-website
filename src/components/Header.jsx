import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

import { TfiShoppingCartFull, TfiShoppingCart } from "react-icons/tfi";
import { IoShirt, IoHome } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { PiDiamondsFourFill } from "react-icons/pi";

const Header = ({ setToggleCart }) => {
	const { cart, countCart } = useContext(Context);

	return (
		<nav className="items-center justify-between px-6 pt-3 text-center text-rose-900 bg-opacity-70 backdrop-filter backdrop-blur-sm bg-rose-400 sm:flex sm:pt-0">
			{/* ignore this ul, theyre here so the color can render*/}
			<ul className="hidden">
				<li className="bg-rose-900"></li>
				<li className="bg-blue-800"></li>
				<li className="bg-black"></li>
				<li className="bg-gray-600"></li>
			</ul>

			<Link to="/">
				<h1 className="flex items-center gap-2 text-3xl tracking-widest">
					whatevs
					<PiDiamondsFourFill className="text-xl" />
				</h1>
			</Link>
			<ul className="flex items-center justify-between w-full py-8 text-3xl sm:w-64">
				<Link to="/">
					<li>
						<IoHome />
					</li>
				</Link>
				<Link to="/categories">
					<li className="flex">
						<IoShirt />
						<BiCategoryAlt className="text-xl" />
					</li>
				</Link>

				<li>
					<button
						className="relative flex items-center rounded-lg"
						onClick={() => {
							setToggleCart((prev) => !prev);
						}}
					>
						{cart.length > 0 ? <TfiShoppingCartFull /> : <TfiShoppingCart />}

						{cart.length > 0 && (
							<p className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold rounded-full -right-3 -top-5 bg-rose-100 text-rose-700">
								{cart.length > 0 ? countCart() : 0}
							</p>
						)}
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Header;

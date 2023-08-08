import React from "react";
import { Link } from "react-router-dom";

import { scrollToTop } from "../utils/scrollToTop";

import { PiDiamondsFourFill } from "react-icons/pi";

const Footer = () => {
	return (
		<footer className="w-full mt-24 text-sm bg-gray-700">
			<div className="flex flex-col items-center gap-2 p-4 text-rose-500">
				<h1 className="flex items-center gap-2 text-xl">
					whatevs <PiDiamondsFourFill />
				</h1>
				<nav>
					<ul className="flex gap-4 text-gray-300 ">
						<Link onClick={scrollToTop} to="/">
							<li>Home</li>
						</Link>
						<Link onClick={scrollToTop} to="/categories">
							<li>Products</li>
						</Link>
						<li>Contact</li>
						<li>About</li>
					</ul>
				</nav>
			</div>
			<div className="flex flex-col items-center gap-2 p-4 text-gray-500">
				<p>whatevs - whatever works to be honest</p>
				<a
					target="_blank"
					href="https://github.com/megatronhehe"
					className="flex items-center gap-4 mt-4 text-xs "
				>
					made by satya.dev (2023) - react.js frontend solo project
				</a>
			</div>
		</footer>
	);
};

export default Footer;

{
	/* <div className="flex items-center justify-between h-56 px-2 bg-gray-700 md:px-24 text-rose-100">
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

						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center justify-center h-full text-sm text-center text-gray-400">
					<h1 className="tracking-widest text-md">whatevs</h1>
					<p>whatever bro i dont know either</p>
					<a
						target="_blank"
						href="https://github.com/megatronhehe"
						className="flex items-center gap-4 mt-12 text-gray-500"
					>
						<PiDiamondsFourFill />
						made by satya.dev (2023) - react.js frontend solo project
						<PiDiamondsFourFill />
					</a>
				</div>
			</div> */
}

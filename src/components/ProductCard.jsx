import React, { useState } from "react";
import image from "../assets/default-img.png";
import { Link } from "react-router-dom";

import { productsArray } from "../data/data";

const ProductCard = ({ name, type, price, id, color, size, altId }) => {
	const [isToggledMore, setIsToggledMore] = useState(false);

	// const thisProduct = productsArray.find((item) => item.id == id);

	const toggle = () => {
		setIsToggledMore((prev) => !prev);
	};

	const colorElement = color.map((item, i) => (
		<li key={i} className={`bg-${item} rounded-full w-8 h-8`}></li>
	));

	const sizeElement = size.map((item, i) => <li key={i}>{item}</li>);

	return (
		<div className="flex flex-col text-center mb-4">
			<div className="relative">
				<div className="w-full">
					<Link to={`/categories/${id}`}>
						<img
							className="w-full object-cover rounded-xl"
							src={image}
							alt="Image"
						/>
					</Link>
				</div>

				<Link to={`/categories${id}`}>
					<div className="w-full flex flex-col">
						<h2 className="text-rose-900">{name}</h2>
						<p className="text-sm text-gray-400">{type}</p>
					</div>
				</Link>

				<p className=" text-md absolute top-0 left-0 p-2 text-black">
					${price - 0.01}
				</p>
				<button
					onClick={toggle}
					className="bg-white absolute w-1/5 h-1/6 top-2 right-2 p-2 text-black rounded-lg"
				>
					{isToggledMore ? "x" : "+"}
				</button>

				<div
					className={`absolute flex flex-col gap-2 bottom-0 bg-gray-100 w-full rounded-xl shadow-sm p-2 text-sm ${
						!isToggledMore && "hidden"
					}`}
				>
					<ul className="flex justify-between pb-2 border-b-2">
						{colorElement}
					</ul>
					<ul className="flex justify-between">{sizeElement}</ul>
					<button className="border border-rose-900 w-full rounded-lg py-1">
						add to cart +
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

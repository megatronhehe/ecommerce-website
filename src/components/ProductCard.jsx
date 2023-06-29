import React, { useState, useContext } from "react";
import image from "../assets/default-img.png";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

import { productsArray } from "../data/data";

const ProductCard = ({ name, type, price, id, color, size }) => {
	const { plusQuantity, minusQuantity, chooseSize, chooseColor, addToCart } =
		useContext(Context);

	const thisProduct = productsArray.find((item) => item.id == id);

	const [isToggledMore, setIsToggledMore] = useState(false);
	const [thisProductData, setThisProductData] = useState({
		...thisProduct,
		size: thisProduct.size[0],
		color: thisProduct.color[0],
		altId: `${thisProduct.id}${thisProduct.type}${thisProduct.size[0]}${thisProduct.color[0]}`,
	});

	const toggle = () => {
		setIsToggledMore((prev) => !prev);
	};

	const colorElement = color.map((item, i) => (
		<li
			key={i}
			onClick={() => chooseColor(item, setThisProductData)}
			className={`bg-${item} rounded-full w-8 h-8 text-white shadow-md p-1`}
		>
			{thisProductData.color === item && (
				<div className="w-full h-full border-2 border-gray-300 rounded-full"></div>
			)}
		</li>
	));

	const sizeElement = size.map((item, i) => (
		<li
			key={i}
			onClick={() => chooseSize(item, setThisProductData)}
			className={`px-2 py-1 rounded-lg ${
				thisProductData.size === item && "border border-rose-900"
			}`}
		>
			{item}
		</li>
	));

	return (
		<div className="flex flex-col mb-4 text-center">
			<div className="relative">
				<div className="w-full">
					<Link to={`/categories/${id}`}>
						<img
							className="object-cover w-full rounded-xl"
							src={image}
							alt="Image"
						/>
					</Link>
				</div>

				<Link to={`/categories${id}`}>
					<div className="flex flex-col w-full">
						<h2 className="text-rose-900">{name}</h2>
						<p className="text-sm text-gray-400">{type}</p>
					</div>
				</Link>

				<p className="absolute top-0 left-0 p-2 text-black text-md">
					${price - 0.01}
				</p>
				<button
					onClick={toggle}
					className="absolute w-1/5 p-2 text-black bg-white rounded-lg h-1/6 top-2 right-2"
				>
					{isToggledMore ? "x" : "+"}
				</button>

				<div
					className={`opacity-95 absolute flex flex-col gap-2 bottom-0 bg-white w-full rounded-xl shadow-md p-2 text-sm ${
						!isToggledMore && "hidden"
					}`}
				>
					<ul className="flex justify-between pb-2 border-b-2">
						{colorElement}
					</ul>

					<ul className="flex justify-between pb-2 border-b-2">
						{sizeElement}
					</ul>

					<div className="flex items-center justify-center gap-2">
						<div className="flex justify-around w-4/5">
							<button
								onClick={() => minusQuantity(setThisProductData)}
								disabled={thisProductData.quantity < 2}
							>
								-
							</button>
							<p>{thisProductData.quantity}</p>
							<button onClick={() => plusQuantity(setThisProductData)}>
								+
							</button>
						</div>
						<button
							onClick={() => addToCart(thisProductData)}
							className="w-full py-1 border rounded-lg border-rose-900"
						>
							+ cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

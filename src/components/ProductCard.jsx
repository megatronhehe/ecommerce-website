import React, { useState, useContext } from "react";
import image from "../assets/default-img.png";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

import { productsArray } from "../data/data";

const ProductCard = ({ name, type, price, id, color, size }) => {
	const { cart, setCart } = useContext(Context);

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

	const setNewAltId = () => {
		setThisProductData((prev) => ({
			...prev,
			altId: `${prev.id}${prev.type}${prev.size}${prev.color}`,
		}));
	};

	const chooseColor = (selectedColor) => {
		setThisProductData((prev) => ({ ...prev, color: selectedColor }));
		setNewAltId();
	};

	const chooseSize = (selectedSize) => {
		setThisProductData((prev) => ({ ...prev, size: selectedSize }));
		setNewAltId();
	};

	const plusQuantity = () => {
		setThisProductData((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
	};

	const minusQuantity = () => {
		setThisProductData((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
	};

	const addToCart = () => {
		setCart((prev) => {
			const isExistInCart = prev.some(
				(item) => item.altId === thisProductData.altId
			);
			if (isExistInCart) {
				return prev.map((item) =>
					item.altId === thisProductData.altId
						? { ...item, quantity: item.quantity + thisProductData.quantity }
						: item
				);
			} else {
				return [...prev, thisProductData];
			}
		});
	};

	const colorElement = color.map((item, i) => (
		<li
			key={i}
			onClick={() => {
				chooseColor(item);
				console.log(thisProductData.color);
			}}
			className={`bg-${item} rounded-full w-8 h-8 text-white shadow-md`}
		>
			{thisProductData.color === item && "v"}
		</li>
	));

	const sizeElement = size.map((item, i) => (
		<li
			key={i}
			onClick={() => chooseSize(item)}
			className={`px-2 py-1 rounded-lg ${
				thisProductData.size === item && "border border-rose-900"
			}`}
		>
			{item}
		</li>
	));

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
					className={`opacity-95 absolute flex flex-col gap-2 bottom-0 bg-gray-100 w-full rounded-xl shadow-sm p-2 text-sm ${
						!isToggledMore && "hidden"
					}`}
				>
					<ul className="flex justify-between pb-2 border-b-2">
						{colorElement}
					</ul>

					<ul className="flex justify-between pb-2 border-b-2">
						{sizeElement}
					</ul>

					<div className="flex justify-center items-center gap-2">
						<div className="flex justify-around w-2/3">
							<button
								onClick={minusQuantity}
								disabled={thisProductData.quantity < 2}
							>
								-
							</button>
							<p>{thisProductData.quantity}</p>
							<button onClick={plusQuantity}>+</button>
						</div>
						<button
							onClick={addToCart}
							className="border border-rose-900 w-full rounded-lg py-1"
						>
							add to cart +
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

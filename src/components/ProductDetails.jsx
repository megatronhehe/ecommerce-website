import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import { productsArray } from "../data/data";

const ProductDetails = () => {
	const { setCart, cart, countCart } = useContext(Context);
	const { productId } = useParams();
	const navigate = useNavigate();

	const thisProduct = productsArray.find((item) => item.id == productId);

	const [thisProductData, setThisProductData] = useState({
		...thisProduct,
		size: thisProduct.size[0],
		color: thisProduct.color[0],
		altId: `${thisProduct.id}${thisProduct.type}${thisProduct.size[0]}${thisProduct.color[0]}`,
	});

	const setNewAltId = () => {
		setThisProductData((prev) => ({
			...prev,
			altId: `${prev.id}${prev.type}${prev.size}${prev.color}`,
		}));
	};

	const chooseSize = (selectedSize) => {
		setThisProductData((prev) => ({ ...prev, size: selectedSize }));
		setNewAltId();
	};

	const chooseColor = (selectedColor) => {
		setThisProductData((prev) => ({ ...prev, color: selectedColor }));
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

	const sizeElement = thisProduct.size.map((item, i) => (
		<p
			key={i}
			onClick={() => chooseSize(item)}
			className={`border border-rose-900 px-4 py-1 rounded-md hover:bg-rose-900 hover:text-rose-100 ${
				thisProductData.size === item && "bg-rose-900  text-rose-100"
			}`}
		>
			{item}
		</p>
	));

	const colorElement = thisProduct.color.map((item, i) => (
		<p
			key={i}
			onClick={() => chooseColor(item)}
			className={`border border-rose-900 px-4 py-1 rounded-md hover:bg-rose-900 hover:text-rose-100 ${
				thisProductData.color === item && "bg-rose-900 text-rose-100"
			}`}
		>
			{item}
		</p>
	));

	return (
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="bg-gray-100 w-full col-span-5 px-2 pt-4">
				<p className="ml-4" onClick={() => navigate(-1)}>
					back
				</p>
				<div className="px-4 py-8 w-full lg:flex md:gap-4 h-screen">
					<div className="bg-white shadow-md w-full flex justify-center items-center h-1/2">
						+image here
					</div>
					<div className="bg-white shadow-md w-full h-full md:h-1/2 mt-8 lg:mt-0 p-4">
						<h1 className="text-center tracking-widest text-rose-900 text-lg border-b border-rose-900 py-2">
							{thisProduct.name}
						</h1>
						<p className="mt-4 text-xl text-center"> ${thisProduct.price}</p>
						<p className="mt-4">type : {thisProduct.type}</p>
						<p className="mt-4">size :</p>
						<div className="flex gap-3">{sizeElement}</div>
						<p className="mt-4">color :</p>
						<div className="flex gap-3">{colorElement}</div>
						<div className="flex items-center mt-4 gap-5">
							quantity :
							<button
								onClick={plusQuantity}
								className="w-8 h-8 rounded-full text-rose-900 border border-rose-900 flex justify-center items-center text-xl hover:bg-rose-900 hover:text-rose-100"
							>
								+
							</button>
							<p className="">{thisProductData.quantity}</p>
							<button
								onClick={minusQuantity}
								className={`w-8 h-8 rounded-full text-rose-900 
                            border border-rose-900 flex justify-center items-center text-xl hover:bg-rose-900 hover:text-rose-100`}
								disabled={thisProductData.quantity < 2 ? true : false}
							>
								-
							</button>
							<div className="flex gap-6"></div>
						</div>
						<p
							onClick={addToCart}
							className="text-center mt-6 bg-rose-900 text-yellow-300 text-lg rounded-lg py-1 shadow-md"
						>
							+ add to cart
						</p>
						{countCart() > 0 && (
							<Link to="/cart">
								<p className="text-center mt-4 text-sm text-gray-400">
									you have <span className="font-bold">{countCart()}</span>{" "}
									{countCart() > 1 ? "items" : "item"} in your cart, click to
									check{" "}
								</p>
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default ProductDetails;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import { productsArray } from "../data/data";

import image from "../assets/default-img.png";

const ProductDetails = () => {
	const {
		countCart,
		plusQuantity,
		minusQuantity,
		chooseSize,
		chooseColor,
		addToCart,
	} = useContext(Context);
	const { productId } = useParams();
	const navigate = useNavigate();

	const thisProduct = productsArray.find((item) => item.id == productId);

	const [thisProductData, setThisProductData] = useState({
		...thisProduct,
		size: thisProduct.size[0],
		color: thisProduct.color[0],
		altId: `${thisProduct.id}${thisProduct.type}${thisProduct.size[0]}${thisProduct.color[0]}`,
	});

	const sizeElement = thisProduct.size.map((item, i) => (
		<li
			key={i}
			onClick={() => chooseSize(item, setThisProductData)}
			className={`border border-rose-900 px-4 py-1  hover:bg-rose-900 hover:text-rose-100 ${
				thisProductData.size === item && "bg-rose-900  text-rose-100"
			}`}
		>
			{item}
		</li>
	));

	const colorElement = thisProduct.color.map((item, i) => (
		<p
			key={i}
			onClick={() => chooseColor(item, setThisProductData)}
			className={`bg-${item} rounded-full w-8 h-8 text-white shadow-md p-1`}
		>
			{thisProductData.color === item && (
				<div className="w-full h-full border-2 border-gray-300 rounded-full"></div>
			)}
		</p>
	));

	return (
		<>
			<button
				className="top-0 pb-4 my-8 ml-2 text-gray-400"
				onClick={() => navigate(-1)}
			>
				Back
			</button>
			<section className="relative p-2 sm:flex sm:gap-4 md:gap-8">
				<div className="flex justify-center sm:w-1/2 ">
					<img className="rounded-xl" src={image} />
				</div>
				<div className="mt-4 text-sm sm:mt-0 sm:w-1/2 ">
					<div className="text-xl sm:text-2xl">
						<h1>{thisProduct.name}</h1>
						<p className=""> ${thisProduct.price}</p>
					</div>

					<p className="mt-4">{thisProduct.type}</p>

					<div className="mt-4">
						<p>size :</p>
						<ul className="flex gap-1">{sizeElement}</ul>
					</div>

					<div className="mt-4">
						<p>color :</p>
						<div className="flex gap-3">{colorElement}</div>
					</div>

					<div className="mt-4">
						<p>quantity:</p>
						<div className="flex items-center gap-5 mt-1">
							<button
								onClick={() => plusQuantity(setThisProductData)}
								className="flex items-center justify-center w-8 h-8 text-xl border rounded-full text-rose-900 border-rose-900 hover:bg-rose-900 hover:text-rose-100"
							>
								+
							</button>
							<p className="">{thisProductData.quantity}</p>
							<button
								onClick={() => minusQuantity(setThisProductData)}
								className={`w-8 h-8 rounded-full text-rose-900 
                            border border-rose-900 flex justify-center items-center text-xl hover:bg-rose-900 hover:text-rose-100`}
								disabled={thisProductData.quantity < 2 ? true : false}
							>
								-
							</button>
						</div>
					</div>

					<div>
						<button
							onClick={() => addToCart(thisProductData)}
							className="w-full py-4 mt-6 text-sm text-center rounded-lg shadow-md text-rose-100 bg-rose-900"
						>
							+ add to cart
						</button>
						{countCart() > 0 && (
							<Link to="/cart">
								<p className="mt-4 text-sm text-center text-gray-400">
									you have <span className="font-bold">{countCart()}</span>{" "}
									{countCart() > 1 ? "items" : "item"} in your cart, click to
									check{" "}
								</p>
							</Link>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

{
}

export default ProductDetails;

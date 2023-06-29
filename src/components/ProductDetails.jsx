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
		<p
			key={i}
			onClick={() => chooseSize(item, setThisProductData)}
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
			onClick={() => chooseColor(item, setThisProductData)}
			className={`bg-${item} rounded-full w-8 h-8 text-white shadow-md p-1`}
		>
			{thisProductData.color === item && (
				<div className="w-full h-full border-2 border-gray-300 rounded-full"></div>
			)}
		</p>
	));

	return (
		<div className="grid-cols-7 lg:grid lg:grid-cols-9">
			<div></div>

			<div className="w-full col-span-7 px-2 pt-4 shadow-lg ">
				<p className="ml-4" onClick={() => navigate(-1)}>
					Back
				</p>
				<div className="gap-8 px-4 py-8 sm:flex">
					<div className="">
						<img className="" src={image} />
					</div>

					<div className="w-full p-4 bg-white shadow-md md:w-1/2">
						<h1 className="py-2 text-lg tracking-widest text-center border-b text-rose-900 border-rose-900">
							{thisProduct.name}
						</h1>
						<p className="mt-4 text-xl text-center"> ${thisProduct.price}</p>
						<p className="mt-4">type : {thisProduct.type}</p>
						<p className="mt-4">size :</p>
						<div className="flex gap-3">{sizeElement}</div>
						<p className="mt-4">color :</p>
						<div className="flex gap-3">{colorElement}</div>
						<div className="flex items-center gap-5 mt-4">
							quantity :
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
							<div className="flex gap-6"></div>
						</div>
						<p
							onClick={() => addToCart(thisProductData)}
							className="py-1 mt-6 text-lg text-center rounded-lg shadow-md text-rose-100 bg-rose-900"
						>
							+ add to cart
						</p>
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
			</div>

			<div></div>
		</div>
	);
};

export default ProductDetails;

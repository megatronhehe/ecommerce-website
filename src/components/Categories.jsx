import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import ProductCard from "./ProductCard";

const Categories = () => {
	const { allProducts, selectedCategory, setSelectedCategory } =
		useContext(Context);

	const filteredItems = allProducts.filter(
		(item) => item.type === selectedCategory
	);

	const filteredItemsElement = filteredItems.map((item, i) => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			type={item.type}
			color={item.color}
			size={item.size}
			altId={item.altId}
			quantity={item.quantity}
		/>
	));

	const allItemsElement = allProducts.map((item, i) => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			type={item.type}
			color={item.color}
			size={item.size}
			altId={item.altId}
			quantity={item.quantity}
		/>
	));

	const categoriesArray = [...new Set(allProducts.map((item) => item.type))];

	const categoriesElement = categoriesArray.map((item, i) => (
		<p
			key={i}
			onClick={() => setSelectedCategory(item)}
			className={`px-4 py-2 rounded-full border  border-rose-900 hover:bg-rose-900 hover:text-rose-100 cursor-pointer mt-3 ${
				selectedCategory === item && "bg-rose-900 text-rose-100"
			}`}
		>
			{item}
		</p>
	));

	return (
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="bg-gray-100 w-full col-span-5">
				<div className=" py-12 text-center">
					<div className="px-4">
						<h1 className="text-rose-900 text-xl mb-6 border-b border-rose-900 pb-4">
							Categories
						</h1>
					</div>

					<section className="flex flex-wrap justify-around items-center my-4">
						<p
							onClick={() => setSelectedCategory("all")}
							className={`px-4 py-2 rounded-full border  border-rose-900 hover:bg-rose-900 hover:text-rose-100 cursor-pointer mt-3 ${
								selectedCategory === "all" && "bg-rose-900 text-rose-100"
							}`}
						>
							All
						</p>
						{categoriesElement}
					</section>

					<section className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
						{selectedCategory === "all"
							? allItemsElement
							: filteredItemsElement}
					</section>
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Categories;

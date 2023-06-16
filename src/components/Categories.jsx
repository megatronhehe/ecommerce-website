import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Categories = () => {
	const { allProducts, selectedCategory, setSelectedCategory } =
		useContext(Context);

	const filteredItems = allProducts.filter(
		(item) => item.type === selectedCategory
	);

	const filteredItemsElement = filteredItems.map((item, i) => (
		<div key={i} className="w-full h-40 bg-white shadow-md">
			{item.name}
		</div>
	));

	const allItemsElement = allProducts.map((item, i) => (
		<Link
			to={`/categories/${item.id}`}
			key={i}
			className="w-full h-40 bg-white shadow-md"
		>
			{item.name}
		</Link>
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
				<div className="px-4 py-12 text-center">
					<h1 className="text-rose-900 text-xl mb-6 border-b border-rose-900 pb-4">
						Categories
					</h1>

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

					<section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-4 gap-5 p-4">
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

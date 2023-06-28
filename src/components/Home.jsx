import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import ProductCard from "./ProductCard";

const Home = () => {
	const { allProducts, setSelectedCategory } = useContext(Context);

	const featuredItemsElement = allProducts
		.slice(0, 4)
		.map((item, i) => (
			<ProductCard
				key={item.id}
				id={item.id}
				name={item.name}
				price={item.price}
				type={item.type}
				color={item.color}
				size={item.size}
				altId={item.altId}
			/>
		));

	const categoriesArray = [...new Set(allProducts.map((item) => item.type))];

	const categoriesElement = categoriesArray.map((item, i) => (
		<Link
			key={i}
			to="/categories"
			onClick={() => setSelectedCategory(item)}
			className={`h-48 w-full bg-white shadow-md flex justify-center items-center ${
				i % 2 === 0 && "col-span-2"
			}`}
		>
			<div>{item}</div>
		</Link>
	));

	return (
		<div className="h-full grid-cols-7 sm:grid ">
			<div className="bg-gray-200"></div>
			<div className="w-full col-span-5">
				<section className="flex items-center justify-center h-64 bg-gray-300">
					+ add banner here
				</section>

				<div className="px-2 py-12 text-center bg-gray-100">
					<section className="mb-12 xl:px-16">
						<div className="px-2">
							<h1 className="pb-2 mb-4 text-xl border-b text-rose-900 border-rose-900 xl:mb-12">
								Featured Items
							</h1>
						</div>
						<div className="grid grid-cols-2 gap-2 xl:gap-6">
							{featuredItemsElement}
						</div>
					</section>

					<section className="mb-12 xl:px-16">
						<div className="px-2">
							<h1 className="pb-2 mb-4 text-xl border-b text-rose-900 border-rose-900 xl:mb-12">
								Categories
							</h1>
						</div>
						<div className="grid grid-cols-3 gap-3 xl:gap-10">
							{categoriesElement}
						</div>
					</section>
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Home;

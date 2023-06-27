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
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="w-full col-span-5">
				<section className="bg-gray-300 h-64 flex justify-center items-center">
					+ add banner here
				</section>

				<div className="bg-gray-100 px-4 py-12 text-center">
					<section className="mb-12 xl:px-16">
						<h1 className="text-xl text-rose-900 mb-4 border-b border-rose-900 pb-2 xl:mb-12">
							Featured Items
						</h1>
						<div className=" grid grid-cols-2 gap-3  xl:gap-6">
							{featuredItemsElement}
						</div>
					</section>

					<section className="mb-12  xl:px-16">
						<h1 className="text-xl text-rose-900 mb-4 border-b border-rose-900 pb-2 xl:mb-12">
							Categories
						</h1>
						<div className=" grid grid-cols-3 gap-3 xl:gap-10">
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

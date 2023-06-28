import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import ProductCard from "./ProductCard";

const Home = () => {
	const { allProducts, setSelectedCategory } = useContext(Context);

	const featuredItemsElement = allProducts.map((item, i) => (
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

	const categoriesElement = categoriesArray.map((item, i) => {
		const randomNumber123 = Math.floor(Math.random() * 2 + 1);
		return (
			<Link
				key={i}
				to="/categories"
				onClick={() => setSelectedCategory(item)}
				className={`h-48 w-full bg-gray-100 shadow-md flex justify-center items-center col-span-${randomNumber123}`}
			>
				<div>{item}</div>
			</Link>
		);
	});

	return (
		<div className="h-full grid-cols-7 sm:grid ">
			<div className=""></div>
			<div className="w-full col-span-5">
				<div className="px-2 py-12 text-center shadow-lg">
					<section className="mb-12 ">
						<div className="px-2">
							<h1 className="pb-4 mb-6 text-xl border-b text-rose-900 border-rose-900 ">
								Featured Items
							</h1>
						</div>
						<div className="grid grid-cols-2 gap-2 xl:grid-cols-4 md:grid-cols-3 ">
							{featuredItemsElement}
						</div>
					</section>
				</div>
			</div>
			<div className=""></div>
		</div>
	);
};

export default Home;

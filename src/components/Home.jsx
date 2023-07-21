import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import ProductCard from "./ProductCard";

const Home = () => {
	const { allProducts } = useContext(Context);

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

	return (
		<>
			<section>
				<h1 className="px-0 pb-4 mx-2 my-8 text-2xl border-b">
					Featured Items
				</h1>
				<div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 md:grid-cols-4">
					{featuredItemsElement}
				</div>
			</section>
		</>
	);
};

export default Home;

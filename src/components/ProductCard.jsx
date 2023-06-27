import React from "react";
import image from "../assets/default-img.png";
import { Link } from "react-router-dom";

const ProductCard = ({ name, type, price, id }) => {
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
				<p className="font-bold text-md absolute top-0 left-0 p-2 text-black">
					${price - 0.01}
				</p>
				<button className="bg-white absolute w-1/5 h-1/6 top-2 right-2 p-2 text-black rounded-lg">
					+
				</button>
			</div>
		</div>
	);
};

export default ProductCard;

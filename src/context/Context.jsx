import React, { useState, createContext } from "react";
import { productsArray } from "../data/data";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [allProducts, setAllProducts] = useState(productsArray);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [cart, setCart] = useState([]);

	const countCart = () => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity));
		return total;
	};

	return (
		<Context.Provider
			value={{
				allProducts,
				selectedCategory,
				cart,
				setSelectedCategory,
				setCart,
				countCart,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };

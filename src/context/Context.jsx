import React, { useState, createContext } from "react";
import { productsArray } from "../data/data";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [allProducts, setAllProducts] = useState(productsArray);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [cart, setCart] = useState([]);

	return (
		<Context.Provider
			value={{
				allProducts,
				selectedCategory,
				cart,
				setSelectedCategory,
				setCart,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };

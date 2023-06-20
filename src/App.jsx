import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import ProductDetails from "./components/productDetails";
import Checkout from "./components/Checkout";

function App() {
	return (
		<div>
			<header>
				<Header />
			</header>

			<main className="h-screen">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/categories/:productId" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</main>

			<footer className="">{/* <Footer /> */}</footer>
		</div>
	);
}

export default App;

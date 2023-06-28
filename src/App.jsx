import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="">
			<header>
				<Header />
			</header>

			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/categories/:productId" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</main>

			<footer className="mt-auto">
				<Footer />
			</footer>
		</div>
	);
}

export default App;

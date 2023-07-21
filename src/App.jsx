import React, { useState } from "react";
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
		<>
			<header>
				<Header />
			</header>

			<main className="flex justify-center">
				<section className="w-full max-w-5xl sm:h-screen ">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/categories" element={<Categories />} />
						<Route path="/categories/:productId" element={<ProductDetails />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</section>
			</main>

			{/* pop out cart */}
			{/* <section className="fixed top-0 right-0 w-3/4 h-screen bg-gray-400">
				<div className="flex flex-col items-center justify-center w-full h-full"></div>
			</section> */}

			<footer className="mt-24 ">
				<Footer />
			</footer>
		</>
	);
}

export default App;

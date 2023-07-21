import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import CartPopout from "./components/CartPopout";

function App() {
	const [toggleCart, setToggleCart] = useState(false);

	return (
		<>
			<header>
				<Header setToggleCart={setToggleCart} />
			</header>

			<main className="flex justify-center">
				<section className="w-full max-w-5xl sm:h-screen ">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/categories" element={<Categories />} />
						<Route
							path="/categories/:productId"
							element={<ProductDetails setToggleCart={setToggleCart} />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</section>
			</main>

			{/* pop out cart */}
			{toggleCart && <CartPopout setToggleCart={setToggleCart} />}

			<footer className="mt-24 ">
				<Footer />
			</footer>
		</>
	);
}

export default App;

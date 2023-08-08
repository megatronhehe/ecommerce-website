import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Checkout from "./pages/Checkout/Checkout";

import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Footer from "./components/Footer";
import CartPopout from "./components/CartPopout";

function App() {
	const [toggleCart, setToggleCart] = useState(false);

	return (
		<>
			<Header setToggleCart={setToggleCart} />

			<MainContainer>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home setToggleCart={setToggleCart} />}
					/>
					<Route
						path="/categories"
						element={<Categories setToggleCart={setToggleCart} />}
					/>
					<Route
						path="/categories/:productId"
						element={<ProductDetails setToggleCart={setToggleCart} />}
					/>
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</MainContainer>

			{/* pop out cart */}
			<AnimatePresence>
				{toggleCart && <CartPopout setToggleCart={setToggleCart} />}
			</AnimatePresence>

			<Footer />
		</>
	);
}

export default App;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const navigate = useNavigate();
	const { cart, setCart } = useContext(Context);

	const plusQuantityInCart = (altid) => {
		setCart((prev) =>
			prev.map((item) =>
				item.altId === altid ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const minusQuantityInCart = (altid) => {
		setCart((prev) =>
			prev.map((item) =>
				item.altId === altid ? { ...item, quantity: item.quantity - 1 } : item
			)
		);
	};

	const deleteItemInCart = (altid) => {
		setCart((prev) => prev.filter((item) => item.altId !== altid));
	};

	const countTotalPrice = () => {
		let total = 0;
		cart.forEach((item) => (total += item.price * item.quantity));
		return total;
	};

	const itemsInCartElement = cart.map((item, i) => (
		<div key={i} className="flex w-full h-40 p-2 mt-4 bg-white shadow-md">
			<Link
				to={`/categories/${item.id}`}
				className="flex items-center justify-center w-1/2 h-full p-2 text-xs bg-gray-100 rounded-md md:w-1/3"
			>
				+ product picture here
			</Link>
			<div className="w-full px-4 text-center">
				<h1 className="pb-1 mb-2 tracking-widest border-b border-rose-900">
					<Link to={`/categories/${item.id}`}>{item.name}</Link>
				</h1>
				<div className="flex items-center justify-around">
					<div>
						<p>{item.type}</p>
						<p>{item.color}</p>
						<p>{item.size.toUpperCase()}</p>
					</div>
					<div>
						<p className="mb-2">${item.price * item.quantity}</p>
						<div className="flex items-center justify-center gap-2">
							<button
								className="px-1 rounded-full  text-rose-900"
								onClick={() => plusQuantityInCart(item.altId)}
							>
								+
							</button>
							{item.quantity}
							<button
								className="px-1 rounded-full  text-rose-900"
								onClick={() => minusQuantityInCart(item.altId)}
								disabled={item.quantity < 2 ? true : false}
							>
								-
							</button>
						</div>
					</div>
					<button onClick={() => deleteItemInCart(item.altId)}>x</button>
				</div>
			</div>
		</div>
	));

	return (
		<div className="h-full grid-cols-7 sm:grid ">
			<div className="bg-gray-200"></div>
			<div className="w-full col-span-5 bg-gray-100">
				<div className="px-4 py-12 text-center">
					<div className="flex items-end justify-between pb-4 mb-6 text-sm border-b border-rose-900">
						<h1 onClick={() => navigate(-1)}>Back</h1>
						<h1 className="text-xl text-rose-900">Cart</h1>
						<Link to="/checkout">
							<h1 className="px-3 py-1 rounded-lg bg-rose-900 text-rose-100">
								Checkout
							</h1>
						</Link>
					</div>
					<div className="lg:px-24">
						{cart.length > 0 && (
							<p className="mt-8 tracking-wide font-rose-900">
								Total price :
								<span className="ml-4 font-bold">${countTotalPrice()}</span>
							</p>
						)}

						{cart.length > 0 ? (
							itemsInCartElement
						) : (
							<Link to="/categories">
								<p className="mt-16 text-sm tracking-wide text-gray-400">
									Your cart is empty, go order now and buy and probably make me
									rich or something bro sana buru !
								</p>
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Cart;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Cart = () => {
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
		<div key={i} className="bg-white h-32 w-full p-2 flex mt-4 shadow-md">
			<Link
				to={`/categories/${item.id}`}
				className="h-full w-1/3 bg-gray-100 flex justify-center items-center text-xs p-2 rounded-md"
			>
				+ product picture here
			</Link>
			<div className="w-full text-center px-4">
				<h1 className="border-b border-rose-900 mb-5 tracking-widest pb-1">
					<Link to={`/categories/${item.id}`}>{item.name}</Link>
				</h1>
				<div className="flex justify-around items-center">
					<div>
						<p>{item.type}</p>
						<p>{item.color}</p>
					</div>
					<div>
						<p>${item.price * item.quantity}</p>
						<div className="flex gap-2 justify-center items-center">
							<button
								className=" text-rose-900 px-1 rounded-full"
								onClick={() => plusQuantityInCart(item.altId)}
							>
								+
							</button>
							{item.quantity}
							<button
								className=" text-rose-900 px-1 rounded-full"
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
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="bg-gray-100 w-full col-span-5">
				<div className="px-4 py-12 text-center">
					<h1 className="text-rose-900 text-xl mb-6 border-b border-rose-900 pb-4">
						Cart
					</h1>
					{cart.length > 0 && (
						<p className="mt-8 tracking-wide font-rose-900">
							Total price :
							<span className="font-bold ml-4">${countTotalPrice()}</span>
						</p>
					)}

					{cart.length > 0 ? (
						itemsInCartElement
					) : (
						<Link to="/categories">
							<p className="text-sm tracking-wide text-gray-400 mt-16">
								Your cart is empty, go order now and buy and probably make me
								rich or something bro sana buru !
							</p>
						</Link>
					)}
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Cart;

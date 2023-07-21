import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

import image from "../assets/default-img.png";

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
		<div key={i} className="flex gap-2 p-2 border">
			<div className="w-2/5">
				<Link to={`/categories/${item.id}`}>
					<img src={image} />
				</Link>
			</div>
			<div className="w-3/5 text-sm">
				<div className="flex justify-between p-2 text-base border-b ">
					<h1 className="">
						<Link to={`/categories/${item.id}`}>{item.name}</Link>
					</h1>
					<p>${item.price * item.quantity}</p>
				</div>

				<div className="flex justify-between gap-4 p-4">
					<p>{item.type}</p>
					<p>{item.color}</p>
					<p>{item.size.toUpperCase()}</p>
				</div>

				<div className="flex justify-between px-4">
					<div className="flex gap-4">
						<button
							className="px-1 rounded-full text-rose-900"
							onClick={() => plusQuantityInCart(item.altId)}
						>
							+
						</button>
						{item.quantity}
						<button
							className="px-1 rounded-full text-rose-900"
							onClick={() => minusQuantityInCart(item.altId)}
							disabled={item.quantity < 2 ? true : false}
						>
							-
						</button>
					</div>
					<button onClick={() => deleteItemInCart(item.altId)}>x</button>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<section>
				<h1 className="px-0 pb-4 mx-2 my-8 text-2xl text-center border-b">
					Cart
				</h1>
			</section>
			<section className="h-screen">
				<div className="text-center ">
					<div className="px-2">
						{cart.length > 0 && (
							<p className="mt-8 mb-4 tracking-wide font-rose-900">
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
			</section>
		</>
	);
};

// back
{
	/* <button onClick={() => navigate(-1)}>Back</button> */
}

// navigate to checkout
{
	/* <Link to="/checkout">
						<h1 className="px-3 py-1 rounded-lg bg-rose-900 text-rose-100">
							Checkout
						</h1>
					</Link> */
}

export default Cart;

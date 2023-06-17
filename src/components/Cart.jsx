import React, { useContext } from "react";
import { Context } from "../context/Context";

const Cart = () => {
	const { cart } = useContext(Context);

	const itemImageElement = cart.map((item, i) => <p key={i}>{item.img}</p>);

	const itemNameElement = cart.map((item, i) => <p key={i}>{item.name}</p>);

	const itemColorElement = cart.map((item, i) => <p key={i}>{item.color}</p>);

	const itemSizeElement = cart.map((item, i) => <p key={i}>{item.size}</p>);

	const itemQuantityElement = cart.map((item, i) => (
		<p key={i}>{item.quantity}</p>
	));

	const itemPriceElement = cart.map((item, i) => (
		<p key={i}>${item.price * item.quantity}</p>
	));

	const countTotalPrice = () => {
		let total = 0;
		cart.forEach((item) => (total += item.price));
		return total;
	};

	return (
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="bg-gray-100 w-full col-span-5">
				<div className="px-4 py-12 text-center">
					<h1 className="text-rose-900 text-xl mb-6 border-b border-rose-900 pb-4">
						Cart
					</h1>
					<div className="grid grid-cols-6 gap-1 justify-center text-sm">
						<div className="w-full ">Item {itemImageElement}</div>
						<div className="w-full ">Name {itemNameElement}</div>
						<div className="w-full ">Color {itemColorElement}</div>
						<div className="w-full ">Size {itemSizeElement}</div>
						<div className="w-full ">Quantity {itemQuantityElement}</div>
						<div className="w-full ">Price {itemPriceElement}</div>
					</div>
					{cart.length > 0 && (
						<p className="mt-8 tracking-wide font-rose-900">
							Total price :
							<span className="font-bold ml-4">${countTotalPrice()}</span>
						</p>
					)}
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Cart;

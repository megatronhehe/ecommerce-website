import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Checkout = () => {
	const { cart, setSelectedCategory } = useContext(Context);
	return (
		<div className="h-full grid-cols-7 sm:grid ">
			<div className="bg-gray-200"></div>
			<div className="w-full col-span-5">
				<div className="px-4 py-12 text-center bg-gray-100">
					{cart.length > 0 ? (
						<p>Thank you for buying our products! :D</p>
					) : (
						<div>
							<p>
								Bro your cart is empty, you cant checkout **** bro, go back and
								buy something!
							</p>
							<Link to="/categories">
								<button
									onClick={() => setSelectedCategory("all")}
									className="px-3 py-1 mt-4 rounded-md bg-rose-900 text-rose-100"
								>
									Back
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Checkout;

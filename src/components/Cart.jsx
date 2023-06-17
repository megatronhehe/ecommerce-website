import React from "react";

const Cart = () => {
	return (
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="bg-gray-100 w-full col-span-5">
				<div className="px-4 py-12 text-center">
					<h1 className="text-rose-900 text-xl mb-6 border-b border-rose-900 pb-4">
						Cart
					</h1>
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Cart;

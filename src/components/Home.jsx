import React from "react";

const Home = () => {
	return (
		<div className="h-full sm:grid grid-cols-7 ">
			<div className="bg-gray-200"></div>
			<div className="w-full col-span-5">
				<section className="bg-gray-300 h-64 flex justify-center items-center">
					+ add banner here
				</section>

				<div className="bg-gray-100 px-4 py-12 text-center">
					<section className="mb-12  xl:px-16">
						<h1 className="text-xl text-rose-900 mb-4 border-b border-rose-900 pb-2 xl:mb-12">
							Featured Items
						</h1>
						<div className="px-4 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:gap-6">
							<div className="h-32 xl:h-48 w-full bg-white shadow-md"></div>
							<div className="h-32 xl:h-48 w-full bg-white shadow-md"></div>
							<div className="h-32 xl:h-48 w-full bg-white shadow-md"></div>
							<div className="h-32 xl:h-48 w-full bg-white shadow-md"></div>
						</div>
					</section>

					<section className="mb-12  xl:px-16">
						<h1 className="text-xl text-rose-900 mb-4 border-b border-rose-900 pb-2 xl:mb-12">
							Categories
						</h1>
						<div className="px-4 grid grid-cols-3 gap-3 xl:gap-10">
							<div className="h-48 w-full bg-white col-span-2 shadow-md"></div>
							<div className="h-48 w-full bg-white shadow-md"></div>
							<div className="h-48 w-full bg-white shadow-md"></div>
							<div className="h-48 w-full bg-white col-span-2 shadow-md"></div>
						</div>
					</section>
				</div>
			</div>
			<div className="w-full bg-gray-200"></div>
		</div>
	);
};

export default Home;

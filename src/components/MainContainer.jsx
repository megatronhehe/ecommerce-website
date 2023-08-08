import React from "react";

const MainContainer = ({ children }) => {
	return (
		<main className="flex justify-center py-32">
			<div className="w-full max-w-5xl sm:h-screen ">{children}</div>;
		</main>
	);
};

export default MainContainer;

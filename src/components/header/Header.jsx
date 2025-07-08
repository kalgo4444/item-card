import React from "react";

const Header = () => {
	return (
		<>
			<header className='bg-green-800 h-20 w-full flex items-center'>
				<nav className='container mx-auto flex items-center justify-between'>
					<h1 className='text-3xl font-semibold uppercase'>Logo</h1>
				</nav>
			</header>
		</>
	);
};

export default Header;

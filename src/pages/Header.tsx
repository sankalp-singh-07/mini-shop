import { Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<h1 className="text-xl text-center font-semibold">MiniShop</h1>
			<Outlet />
		</>
	);
};

export default Header;

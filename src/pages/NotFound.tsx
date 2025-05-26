import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<div className="flex justify-center items-center h-screen bg-purple-600">
				<div id="error-page">
					<h1 className="lg:text-6xl font-bold text-2xl text-white">
						Oops!
					</h1>
					<p className="text-xl text-white">Page Not Found</p>

					<div className="mt-4">
						<Link
							to="/"
							className="px-5 py-2 bg-white rounded-md hover:bg-gray-100"
						>
							Go To Home
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;

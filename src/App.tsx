import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Header from './pages/Header';
import CartBox from './components/CartBox';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<CartBox />
		</>
	);
}

export default App;

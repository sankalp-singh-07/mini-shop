import { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import CartBox from '../components/CartBox';

export type dataType = {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	inStock: boolean;
	quantity: number;
};

const Home = () => {
	const [data, setData] = useState<dataType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchProduct = async () => {
		const products = await api();
		setData(products);
	};

	useEffect(() => {
		try {
			setLoading(true);
			fetchProduct();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, []);

	if (loading)
		return <p className="text-center font-normal text-sm">Loading</p>;

	return (
		<>
			<ProductCard products={data} />
			<CartBox />
		</>
	);
};

export default Home;

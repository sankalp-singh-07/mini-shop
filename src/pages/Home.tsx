import { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

export type dataType = {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	inStock: boolean;
};

const Home = () => {
	const [data, setData] = useState<dataType[]>([]);

	const fetchProduct = async () => {
		const products = await api();
		setData(products);
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	// console.log(data);

	return <ProductCard products={data} />;
};

export default Home;

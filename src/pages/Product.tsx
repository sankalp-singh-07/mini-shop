import { useParams } from 'react-router-dom';
import api from '../services/api';
import type { dataType } from './Home';
import { useEffect, useState } from 'react';

const Product = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			const products = await api();
			const product = products.find(
				(item: dataType) => item.id == Number(id)
			);
			setData(product);
		};
		fetchProduct();
	}, []);

	if (!data) return <p>No product found</p>;

	const { name, description, price, inStock, id: productId } = data;

	return (
		<>
			<div
				className="w-96 bg-gray-400 mx-auto my-4 rounded-md overflow-hidden shadow-md hover:shadow-lg"
				key={productId}
			>
				<div className="relative">
					<div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
						{inStock ? 'Sale' : 'Sold'}
					</div>
				</div>
				<div className="p-4">
					<h3 className="text-lg font-medium mb-2">{name}</h3>
					<p className="text-gray-600 text-sm mb-4">{description}</p>
					<div className="flex items-center justify-between">
						<span className="font-bold text-lg">{price}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;

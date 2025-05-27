import { cartStore } from '../context/store';
import type { dataType } from '../pages/Home';

type ProductCardType = {
	products: dataType[];
};

const ProductCard = ({ products }: ProductCardType) => {
	const addItems = cartStore((state) => state.addItems);

	const handleCart = (product: dataType) => {
		addItems(product);
	};

	return products.map((product) => {
		const { description, id, inStock, name, price } = product;
		return (
			<div
				className="w-96 bg-gray-400 mx-auto my-4 rounded-md overflow-hidden shadow-md hover:shadow-lg"
				key={id}
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
						{product.inStock && (
							<button
								className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
								onClick={() => handleCart(product)}
							>
								Buy Now
							</button>
						)}
						<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
							Detail
						</button>
					</div>
				</div>
			</div>
		);
	});
};

export default ProductCard;

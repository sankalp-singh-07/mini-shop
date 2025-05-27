import { cartStore } from '../context/store';

const CartBox = () => {
	let cart = cartStore((state) => state.cart);
	if (cart.length === 0) return <p>No items in cart</p>;

	return (
		<>
			{cart.map((item) => {
				return (
					<div
						className="flex justify-center items-center flex-col"
						key={item.id}
					>
						<h4>{item.name}</h4>
						<p>{item.description}</p>
						<p>{item.quantity}</p>
						<p>{item.quantity * item.price}</p>
					</div>
				);
			})}
		</>
	);
};

export default CartBox;

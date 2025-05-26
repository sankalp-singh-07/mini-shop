import { cartStore } from '../context/store';

const CartBox = () => {
	const cart = cartStore((state) => state.cart);
	console.log(cart);
	return <div>CartBox</div>;
};

export default CartBox;

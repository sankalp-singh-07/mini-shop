import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { dataType } from '../pages/Home';

type cartStateType = {
	cart: dataType[];
	addItems: (item: dataType) => void;
	removeItems: (id: number) => void;
};

export const cartStore = create<cartStateType>()(
	persist(
		(set) => ({
			cart: [],
			addItems: (item) =>
				set((state) => {
					const exist = state.cart.find((p) => p.id === item.id);

					if (exist) {
						return {
							cart: state.cart.map((p) =>
								p.id === item.id
									? { ...p, quantity: p.quantity + 1 }
									: p
							),
						};
					} else {
						return {
							cart: [...state.cart, { ...item, quantity: 1 }],
						};
					}
				}),
			removeItems: (id) =>
				set((state) => ({
					cart: state.cart.filter((item) => item.id !== id),
				})),
		}),
		{ name: 'cart-items' }
	)
);

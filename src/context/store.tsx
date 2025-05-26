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
				set((state) => ({ cart: [...state.cart, item] })),
			removeItems: (id) =>
				set((state) => ({
					cart: state.cart.filter((item) => item.id !== id),
				})),
		}),
		{ name: 'cart-items' }
	)
);

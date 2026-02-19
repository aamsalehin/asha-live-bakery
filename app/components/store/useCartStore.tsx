import { create } from "zustand";
import { PRODUCTS } from "@/data/Products";


export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
  unit: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (id: number, qty?: number) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;          // ✅ ADDED
  subtotal: () => number;
  totalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (id, qty = 1) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;

    const existing = get().cart.find((i) => i.id === id);

    if (existing) {
      set({
        cart: get().cart.map((i) =>
          i.id === id ? { ...i, qty: i.qty + qty } : i
        ),
      });
    } else {
      set({
        cart: [
          ...get().cart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            unit: product.unit,
            qty,
          },
        ],
      });
    }
  },

  removeItem: (id) =>
    set({ cart: get().cart.filter((i) => i.id !== id) }),

  increaseQty: (id) =>
    set({
      cart: get().cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    }),

  decreaseQty: (id) =>
    set({
      cart: get().cart.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
      ),
    }),

  clearCart: () => set({ cart: [] }), // ✅ ADDED

  subtotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),

  totalItems: () =>
    get().cart.reduce((sum, item) => sum + item.qty, 0),
}));

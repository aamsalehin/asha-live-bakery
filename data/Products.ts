export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "হাফ ব্রেড", price: 50, img: "/images/products/half-bread.jpg", category: "bread" },
  { id: 2, name: "ফুল ব্রেড", price: 100, img: "/images/products/full-bread.jpg", category: "bread" },
  { id: 3, name: "বার্গার বান", price: 15, img: "/images/products/burger-bun.jpg", category: "bun" },
  { id: 4, name: "ক্রীম বান", price: 30, img: "/images/products/cream-bun.jpg", category: "bun" },
  { id: 5, name: "ফুল প্লেইন কেক", price: 180, img: "/images/products/full-cake.jpg", category: "cake" },
  { id: 6, name: "হাফ প্লেইন কেক", price: 90, img: "/images/products/half-cake.jpg", category: "cake" },
  { id: 7, name: "ড্যানিশ", price: 15, img: "/images/products/danish.jpg", category: "hot" },
  { id: 8, name: "প্যাটিস", price: 50, img: "/images/products/pattice.jpg", category: "hot" },
  { id: 9, name: "ঘি টোস্ট", price: 150, img: "/images/products/ghee-toast.jpg", category: "cookies" },
];

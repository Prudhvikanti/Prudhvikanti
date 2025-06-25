"use client";

"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const products = [
  { id: 1, name: "Classic Dill Pickle", category: "Dill", price: 3.99 },
  { id: 2, name: "Spicy Jalapeño Pickle", category: "Spicy", price: 4.49 },
  { id: 3, name: "Sweet Bread and Butter Pickle", category: "Sweet", price: 3.79 },
  { id: 4, name: "Garlic Dill Pickle", category: "Dill", price: 4.19 },
  { id: 5, name: "Kosher Dill Pickle", category: "Dill", price: 3.99 },
  { id: 6, name: "Hot & Spicy Pickle", category: "Spicy", price: 4.59 },
  { id: 7, name: "Sweet Gherkin Pickle", category: "Sweet", price: 3.89 },
  { id: 8, name: "Lemon Dill Pickle", category: "Dill", price: 4.29 },
  { id: 9, name: "Chipotle Pickle", category: "Spicy", price: 4.69 },
  { id: 10, name: "Honey Sweet Pickle", category: "Sweet", price: 3.99 },
  { id: 11, name: "Dill Spear Pickle", category: "Dill", price: 3.79 },
  { id: 12, name: "Spicy Garlic Pickle", category: "Spicy", price: 4.49 },
  { id: 13, name: "Sweet & Sour Pickle", category: "Sweet", price: 3.89 },
  { id: 14, name: "Dill Whole Pickle", category: "Dill", price: 4.19 },
  { id: 15, name: "Jalapeño Spear Pickle", category: "Spicy", price: 4.59 },
  { id: 16, name: "Sweet Relish Pickle", category: "Sweet", price: 3.79 },
  { id: 17, name: "Dill Chips Pickle", category: "Dill", price: 4.29 },
  { id: 18, name: "Spicy Pickle Chips", category: "Spicy", price: 4.69 },
  { id: 19, name: "Sweet Pickle Slices", category: "Sweet", price: 3.99 },
  { id: 20, name: "Garlic Dill Spears", category: "Dill", price: 4.19 },
];

export default function Product() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <section className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pickle Products</h1>
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(({ id, name, category, price }) => (
          <li
            key={id}
            onClick={() => handleProductClick(id)}
            className="border rounded p-4 shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">Category: {category}</p>
            <p className="text-gray-800 font-bold">${price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

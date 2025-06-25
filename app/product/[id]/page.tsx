"use client";

import { useRouter } from "next/router";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Classic Dill Pickle", category: "Dill", price: 3.99, description: "A classic dill pickle with a crisp and tangy flavor.", image: "/pickles/classic-dill.jpg" },
  { id: 2, name: "Spicy Jalapeño Pickle", category: "Spicy", price: 4.49, description: "A spicy jalapeño pickle for those who like a kick.", image: "/pickles/spicy-jalapeno.jpg" },
  { id: 3, name: "Sweet Bread and Butter Pickle", category: "Sweet", price: 3.79, description: "Sweet and tangy bread and butter pickle.", image: "/pickles/bread-butter.jpg" },
  { id: 4, name: "Garlic Dill Pickle", category: "Dill", price: 4.19, description: "Dill pickle infused with garlic flavor.", image: "/pickles/garlic-dill.jpg" },
  { id: 5, name: "Kosher Dill Pickle", category: "Dill", price: 3.99, description: "Traditional kosher dill pickle.", image: "/pickles/kosher-dill.jpg" },
  { id: 6, name: "Hot & Spicy Pickle", category: "Spicy", price: 4.59, description: "Hot and spicy pickle for heat lovers.", image: "/pickles/hot-spicy.jpg" },
  { id: 7, name: "Sweet Gherkin Pickle", category: "Sweet", price: 3.89, description: "Sweet gherkin pickles, perfect for snacking.", image: "/pickles/sweet-gherkin.jpg" },
  { id: 8, name: "Lemon Dill Pickle", category: "Dill", price: 4.29, description: "Dill pickle with a hint of lemon.", image: "/pickles/lemon-dill.jpg" },
  { id: 9, name: "Chipotle Pickle", category: "Spicy", price: 4.69, description: "Smoky chipotle flavored pickle.", image: "/pickles/chipotle.jpg" },
  { id: 10, name: "Honey Sweet Pickle", category: "Sweet", price: 3.99, description: "Sweet pickle with honey flavor.", image: "/pickles/honey-sweet.jpg" },
  { id: 11, name: "Dill Spear Pickle", category: "Dill", price: 3.79, description: "Classic dill pickle spears.", image: "/pickles/dill-spear.jpg" },
  { id: 12, name: "Spicy Garlic Pickle", category: "Spicy", price: 4.49, description: "Spicy pickle with garlic.", image: "/pickles/spicy-garlic.jpg" },
  { id: 13, name: "Sweet & Sour Pickle", category: "Sweet", price: 3.89, description: "Sweet and sour pickle flavor.", image: "/pickles/sweet-sour.jpg" },
  { id: 14, name: "Dill Whole Pickle", category: "Dill", price: 4.19, description: "Whole dill pickles.", image: "/pickles/dill-whole.jpg" },
  { id: 15, name: "Jalapeño Spear Pickle", category: "Spicy", price: 4.59, description: "Jalapeño flavored pickle spears.", image: "/pickles/jalapeno-spear.jpg" },
  { id: 16, name: "Sweet Relish Pickle", category: "Sweet", price: 3.79, description: "Sweet pickle relish.", image: "/pickles/sweet-relish.jpg" },
  { id: 17, name: "Dill Chips Pickle", category: "Dill", price: 4.29, description: "Dill pickle chips.", image: "/pickles/dill-chips.jpg" },
  { id: 18, name: "Spicy Pickle Chips", category: "Spicy", price: 4.69, description: "Spicy pickle chips.", image: "/pickles/spicy-chips.jpg" },
  { id: 19, name: "Sweet Pickle Slices", category: "Sweet", price: 3.99, description: "Sweet pickle slices.", image: "/pickles/sweet-slices.jpg" },
  { id: 20, name: "Garlic Dill Spears", category: "Dill", price: 4.19, description: "Garlic flavored dill pickle spears.", image: "/pickles/garlic-dill-spears.jpg" },
];

export default function ProductDetail() {
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const prod = products.find((p) => p.id === parseInt(id as string));
      setProduct(prod || null);
    }
  }, [router.query]);

  if (!product) {
    return <p className="p-4">Loading product...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md mb-4 rounded"
        />
      )}
      <p className="mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Buy Now
      </button>
    </section>
  );
}

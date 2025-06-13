import React, { useEffect, useState } from "react";
import { getProducts, addToCart, getCart } from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const loadCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cart", {
        credentials: "include", // 👈 add this line
      });
      const data = await res.json();
      console.log("Cart loaded:", data);
      setCart(data);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  };

  const handleAdd = async (code) => {
    try {
      const res = await fetch("http://localhost:3000/api/cart/add_item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 👈 add this line
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      console.log(`${code} added!`, data);
      await loadCart();
    } catch (err) {
      console.error("Add request failed:", err);
    }
  };

  const emptyCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cart/empty", {
        method: "DELETE",
        credentials: "include", // Required to access session
      });
      const data = await res.json();
      console.log("Cart emptied!", data);
      await loadCart();
    } catch (err) {
      console.error("Failed to empty cart:", err);
    }
  };



  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cash Register</h1>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.code}>
            {p.name} - €{Number(p.price).toFixed(2)}{" "}
            <button onClick={() => handleAdd(p.code)}>Add</button>
          </li>
        ))}
      </ul>


      <h2>Cart</h2>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - €{Number(item.price).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total: €{Number(cart.total).toFixed(2)}</strong>
      </p>

      <button onClick={emptyCart} disabled={cart.items.length === 0}>
        Empty Cart
      </button>


    </div>
  );
}

export default App;

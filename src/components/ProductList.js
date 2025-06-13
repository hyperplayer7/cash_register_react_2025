import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList({ onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p.code}>
          <h3>{p.name} - €{p.price}</h3>
          <button onClick={() => onAdd(p.code)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

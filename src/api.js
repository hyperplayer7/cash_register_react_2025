const API_BASE = "http://localhost:3000/api";

export const getProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
};

export const addToCart = async (code) => {
  const res = await fetch(`${API_BASE}/cart/add_item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  return res.json();
};

export const getCart = async () => {
  const res = await fetch(`${API_BASE}/cart`);
  return res.json();
};

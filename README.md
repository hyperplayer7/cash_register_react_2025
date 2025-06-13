# Cash Register React Frontend

This is the React frontend for the **Cash Register App**, a user-facing interface that connects to the Rails backend via JSON API. It allows customers to view products, add them to a shopping cart, and receive dynamic discounts such as Buy-One-Get-One and Bulk Pricing.

---

## 🚀 Features

* ✅ Product listing UI
* ✅ Cart display with discount calculation
* ✅ API integration with Rails backend
* ✅ CORS-ready for backend on `localhost:3000`
* ✅ Simple and clean UX for testing rules

---

## 📦 Installation

Clone the frontend repo:

```bash
git clone git@github.com:hyperplayer7/cash_register_react_2025.git
cd cash_register_react_2025
npm install
```

---

## 🛠️ Development

Start the React app:

```bash
npm start
```

It runs on **port 3001** by default and connects to the Rails API on `http://localhost:3000`.

---

## 🔌 API Integration

The frontend communicates with the following Rails API endpoints:

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| GET    | `/api/products`      | Fetch all products        |
| GET    | `/api/cart`          | Show cart items and total |
| POST   | `/api/cart/add_item` | Add item to cart          |
| DELETE | `/api/cart/empty`    | Clear the cart            |

---

## 📁 Project Structure

* `App.js` — Main component logic
* `index.js` — Entry point
* `package.json` — Project config and dependencies

---

## 🧑‍💻 Author

**hyperplayer7**
GitHub: [github.com/hyperplayer7](https://github.com/hyperplayer7)

---

## 📄 License

This project is for educational and demonstration purposes.

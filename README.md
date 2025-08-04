# SHK Fabrics

An e-commerce platform built for **Harikrishna Textiles**, allowing users to browse, order, and receive fabric products online—similar in functionality to Amazon but focused on textile and clothing materials. This modern web application provides a seamless shopping experience optimized for performance and scalability.

## 🚀 Deployment Status


✅ Hosted on **Netlify** — Continuous Deployment from `main` branch :

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d18b763-b6f6-4cd6-a206-d1fe6a94a9ec/deploy-status)](https://app.netlify.com/sites/shkfabrics/deploys)  

---

## 🛠 Tech Stack

| Layer       | Technology                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **Frontend**| [React](https://reactjs.org/), [Vite](https://vitejs.dev/)                 |
| **Backend** | [Node.js](https://nodejs.org/)                                              |
| **Deployment** | [Netlify](https://www.netlify.com/)                                     |
| **Styling**     | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [Tailwind CSS](https://tailwindcss.com/), [Bootstrap](https://getbootstrap.com/) |
| **APIs / DB** | *(Add if applicable — e.g., Express, MongoDB, Firebase, etc.)*           |


---

## 🚀 Features

- 🧾 Product catalog for fabrics and garments
- 🛒 Add-to-cart & checkout functionality
- 📦 Order tracking and delivery
- 🔐 Secure user authentication *(if implemented)*
- 📱 Fully responsive design for all devices

---

## 📁 Project Structure

```
harikrishna-textiles/
├── public/              # Static assets
├── src/                 
│   ├── comp/      # Reusable React components
│   ├── pages/           # App pages (Home, Product, Checkout, etc.)
│   ├── assets/          # Images, fonts, etc.
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── .eslintrc.cjs        # Linting rules
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata and scripts
└── README.md            # You're reading it 🫵😁
```

---

## 🧪 Development Setup

### Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x


## 📦 Build for Production

```bash
npm run build
```

This will output the optimized app to the `dist/` folder. Deploy that folder to Netlify or your preferred static host.

---

## ✏️ ESLint & Code Quality

This project uses basic ESLint rules for code consistency and readability. You can expand the configuration to include more advanced linting strategies based on your team’s standards.

---

## 📌 Future Improvements

- Payment integration (e.g., Stripe, Razorpay)
- Admin dashboard and inventory management
- User profiles and order history
- Progressive Web App (PWA) features
- SEO optimization and analytics

---

**Made with ❤️ for SHK Fabrics**

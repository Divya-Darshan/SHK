import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";
import Grid from "../grid/ForU-grid";
import Foot from "../foot/foot";
import "./page.css";
import { db } from "../../firebase/Auth-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Page() {
  const { index } = useParams();
  const productIndex = parseInt(index, 10);

  const [loaded, setLoaded] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const product =
    !isNaN(productIndex) && productIndex >= 0 && productIndex < products.length
      ? products[productIndex]
      : products[0];

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📝 Submitting order...", order);

    const orderData = {
      productName: product.name,
      productPrice: product.price,
      ...order,
      createdAt: serverTimestamp(), // 🔥 better for Firestore
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), orderData);
      console.log("✅ Order saved with ID:", docRef.id);

      alert("✅ Order placed successfully!");
      setShowPanel(false);
      setOrder({ name: "", address: "", phone: "" }); // reset form
    } catch (error) {
      console.error("🔥 Firestore error:", error.code, error.message);
      alert("❌ Failed to place order. Check console for details!");
    }
  };

  return (
    <>
      <section className="product-page">
        <div className="product-images">
          {!loaded && <div className="skeleton"></div>}
          <img
            src={product.src}
            alt={product.name}
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? "block" : "none" }}
          />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">
            This is a high quality {product.name} from Harikrishna Textiles.
          </p>
          <button className="btn btn-add-to-cart">Add to Cart</button>
          <button
            className="btn btn-buy-now"
            onClick={() => setShowPanel(true)}
          >
            Buy Now
          </button>
        </div>
      </section>

      {/* Order Panel */}
      <div className={`order-panel ${showPanel ? "open" : ""}`}>
        <div className="order-panel-content">
          <h2>Checkout</h2>
          <p>Product - {product.name}</p>
          <form className="order-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                type="text"
                value={order.name}
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
                required
              />
            </label>
            <label>
              Address
              <textarea
                value={order.address}
                onChange={(e) =>
                  setOrder({ ...order, address: e.target.value })
                }
                required
              ></textarea>
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                value={order.phone}
                onChange={(e) => setOrder({ ...order, phone: e.target.value })}
                required
              />
            </label>
            <button type="submit" className="btn btn-confirm">
              Confirm Order
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={() => setShowPanel(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>

      <Grid />
      <Foot />
    </>
  );
}

export default Page;

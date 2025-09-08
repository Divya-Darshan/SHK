import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";
import Grid from "../grid/ForU-grid";
import Foot from "../foot/foot";
import "./page.css";

function Page() {
  const { index } = useParams();
  const productIndex = parseInt(index, 10);

  const [loaded, setLoaded] = useState(false);

  const product =
    !isNaN(productIndex) && productIndex >= 0 && productIndex < products.length
      ? products[productIndex]
      : products[0];

  // Handle UPI Payment
const handlePayment = () => {
  const amount = product.price.replace("₹", "").trim(); // remove ₹ symbol
  const upiLink = `upi://pay?pa=dharani.r1979@okicici&pn=DHARANI+R&am=${amount}&cu=INR`;

  // Redirect to UPI app
  window.location.href = upiLink;
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

          {/* 🔥 Buy Now triggers UPI payment */}
          <button
            className="btn btn-buy-now"
            onClick={handlePayment}
          >
            Buy Now (Pay via UPI)
          </button>
        </div>
      </section>

      <Grid />
      <Foot />
    </>
  );
}

export default Page;

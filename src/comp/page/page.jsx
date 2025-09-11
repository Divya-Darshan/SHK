// src/comp/page/Page.jsx  (or wherever your Page component file is)
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
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const product =
    !isNaN(productIndex) && productIndex >= 0 && productIndex < products.length
      ? products[productIndex]
      : products[0];

  // parse price to numeric amount (fallback to 1 if invalid)
  const rawAmount = String(product.price || "").replace(/[₹,\s]/g, "");
  let amount = parseFloat(rawAmount);
  if (isNaN(amount) || amount <= 0) amount = 1;

  // YOUR UPI details (you gave these)
  const upiId = "paytmqr6ozrdm@ptys";
  const payeeName = "SRIHARIKRISHNATEXTIL";

  // Build UPI link (encoded)
  const upiLink = `upi://pay?pa=${encodeURIComponent(
    upiId
  )}&pn=${encodeURIComponent(payeeName)}&am=${encodeURIComponent(
    amount.toString()
  )}&cu=INR`;

  // QR service (no lib install required)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    upiLink
  )}&size=300x300`;

  // detect mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleUPIPay = () => {
    if (isMobile) {
      // Try open UPI app
      window.location.href = upiLink;
      // Note: some banks/apps may show their own error for recipient limits — that's outside JS control.
    } else {
      // Desktop -> show QR fallback
      setShowQR(true);
    }
  };

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <>
      <section className="product-page">
        <div className="product-images">
          {!loaded && <div className="skeleton" />}
          <img
            src={product.src}
            alt={product.name}
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? "block" : "none", maxWidth: "100%" }}
          />
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">
            This is a high quality {product.name} from Harikrishna Textiles.
          </p>

          {/* UPI payment button (mobile opens app, desktop shows QR) */}
          <div style={{ marginTop: 16 }}>
            <button
              onClick={handleUPIPay}
              className="btn btn-buy-now"
              style={{
                background: "#0b6623",
                color: "#fff",
                padding: "10px 16px",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Pay ₹{amount} with UPI
            </button>
          </div>

          {/* Desktop QR fallback */}
          {showQR && (
            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 18,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ marginBottom: 8, fontWeight: 600 }}>
                  Scan QR with your UPI app
                </div>
                <img
                  src={qrUrl}
                  alt="UPI QR"
                  style={{ width: 220, height: 220, borderRadius: 8 }}
                />
              </div>

              <div style={{ minWidth: 220 }}>
                <div style={{ marginBottom: 8 }}>
                  Or copy UPI ID and paste in your UPI app:
                </div>
                <div
                  style={{
                    background: "#f5f5f5",
                    padding: 10,
                    borderRadius: 6,
                    marginBottom: 8,
                    wordBreak: "break-word",
                    fontFamily: "monospace",
                  }}
                >
                  {upiId}
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={handleCopyUPI}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #ddd",
                      cursor: "pointer",
                      background: "#fff",
                    }}
                  >
                    {copied ? "Copied ✓" : "Copy UPI ID"}
                  </button>

                  <a
                    href={upiLink}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #ddd",
                      textDecoration: "none",
                      color: "#111",
                      display: "inline-block",
                    }}
                    onClick={() => {
                      /* On desktop some browsers will try to open an app. This is OK as a fallback. */
                    }}
                  >
                    Open UPI (if phone supports)
                  </a>
                </div>

                <div style={{ marginTop: 12, color: "#666", fontSize: 13 }}>
                  If you are on mobile and the "Pay" button shows an error like
                  "exceeded bank limit", that is a bank/UPI-app restriction —
                  try another UPI ID or test with a different UPI app. This
                  fallback QR & copy option ensures customers can still pay.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* keep the rest of your page */}
      <Grid />
      <Foot />
    </>
  );
}

export default Page;

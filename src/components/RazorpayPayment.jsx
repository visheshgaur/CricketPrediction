
import React from "react";

const RazorpayPayment = ({ setPaymentSuccess }) => {
  const loadRazorpay = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = async () => {
      if (window.Razorpay) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          amount: 50000, // Amount in paise (₹500)
          currency: "INR",
          name: "Cricket Prediction",
          description: "Match Prediction Payment",
          image: "https://your-logo-url.com",
          handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            setPaymentSuccess(true); // Set payment success to true
          },
          prefill: {
            name: "Sarthak",
            email: "user@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert("Failed to load Razorpay SDK.");
      }
    };

    document.body.appendChild(script);
  };

  return (
    <button
      onClick={loadRazorpay}
      style={{
        padding: "10px 20px",
        background: "#3399cc",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Pay ₹500 to View Prediction
    </button>
  );
};

export default RazorpayPayment;

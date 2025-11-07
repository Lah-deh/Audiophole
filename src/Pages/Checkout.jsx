import React, { useState } from "react";
import Header from "../Components/Header.jsx";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../Components/CheckoutForm.jsx";
import CheckoutSummary from "../Components/CheckoutSummary.jsx";
import Footer from "../Components/Footer.jsx";
import SuccessModal from "./SuccessModal.jsx";
import { useCart } from "../context/CartContext";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api"; // adjust if path differs
import "../Styles/CheckOut.scss";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const placeOrder = useMutation(api.orders.placeOrder);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "phone",
      "address",
      "zip",
      "city",
      "country",
    ];

    if (paymentMethod === "e-money") {
      requiredFields.push("eMoneyNumber", "eMoneyPin");
    }

    const missing = requiredFields.filter(
      (field) => !formData[field] || formData[field].trim() === ""
    );

    if (missing.length > 0) {
      alert("Please fill all required fields before continuing.");
      return;
    }

    try {
      await placeOrder({
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          zip: formData.zip,
          city: formData.city,
          country: formData.country,
        },
        items: cartItems,
        paymentMethod,
        totals: {
          subtotal: cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
          shipping: 50,
          grandTotal:
            cartItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ) + 50,
        },
      });

      setShowModal(true);
    } catch (err) {
      console.error("Error saving order:", err);
      alert("Something went wrong while saving your order.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      eMoneyNumber: "",
      eMoneyPin: "",
    });
  };

  return (
    <div>
      <Header />

      <div className="alll">
        <h2
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
            color: "#ded3d3ff",
            fontWeight: "400",
            fontSize: "15px",
            marginTop: "3%",
            marginLeft: "10%",
            backgroundColor: "transparent",
          }}
        >
          Go Back
        </h2>
      </div>

      <div className="checkout-container" onSubmit={handleCheckout}>
        <CheckoutForm
          formData={formData}
          onChange={handleChange}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <CheckoutSummary onCheckout={handleCheckout} />
      </div>

      <Footer />

      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        orderTotal={cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )}
        cartItems={cartItems}
        clearCart={() => {
          clearCart();
          resetForm();
        }}
      />
    </div>
  );
};

export default Checkout;

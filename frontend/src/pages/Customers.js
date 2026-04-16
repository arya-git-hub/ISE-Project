import { useState } from "react";

function Customers() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    gst: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        alert("Customer saved successfully!");
        setForm({ name: "", address: "", gst: "", phone: "" });
      } else {
        alert("Failed to save customer: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error saving customer:", error);
      alert("Error saving customer");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Customer</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Customer Name"
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="address"
        value={form.address}
        placeholder="Address"
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="gst"
        value={form.gst}
        placeholder="GST Number"
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="phone"
        value={form.phone}
        placeholder="Phone Number"
        onChange={handleChange}
      /><br /><br />

      <button onClick={handleSubmit}>Save Customer</button>
    </div>
  );
}

export default Customers;
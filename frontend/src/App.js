import { useState } from "react";
import Invoice from "./pages/Invoice";
import Customers from "./pages/Customers";
import Ledger from "./pages/Ledger";

function App() {
  const [activeTab, setActiveTab] = useState("invoice");

  return (
    <div>
      {/* Navigation Bar */}
      <div style={{ padding: "10px", background: "#333", color: "white", display: "flex", gap: "20px" }}>
        <button onClick={() => setActiveTab("invoice")} style={tabStyle(activeTab === "invoice")}>New Invoice</button>
        <button onClick={() => setActiveTab("customers")} style={tabStyle(activeTab === "customers")}>Customers</button>
        <button onClick={() => setActiveTab("ledger")} style={tabStyle(activeTab === "ledger")}>Ledger</button>
      </div>

      {/* Page Content */}
      <div style={{ padding: "10px" }}>
        {activeTab === "invoice" && <Invoice />}
        {activeTab === "customers" && <Customers />}
        {activeTab === "ledger" && <Ledger />}
      </div>
    </div>
  );
}

const tabStyle = (active) => ({
  background: active ? "#555" : "transparent",
  color: "white",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "5px"
});

export default App;
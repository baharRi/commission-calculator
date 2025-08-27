import { useState } from "react";

export default function CommissionCalculator() {
  const [amount, setAmount] = useState("");
  const [commission, setCommission] = useState(null);

  const calculate = () => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      setCommission(value * 0.1); // 10% commission example
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Commission Calculator</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={calculate}>Calculate</button>

      {commission !== null && (
        <p>Commission: ${commission.toFixed(2)}</p>
      )}
    </div>
  );
}
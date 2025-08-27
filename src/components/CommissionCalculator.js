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
    <body className="calculator">
      <h1>Hello, Bahar.</h1>
      <p>Ready to make something new?</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <div className="button-container">
      <button onClick={calculate}>Calculate</button>
      </div>

      {commission !== null && (
        <p>Commission: ${commission.toFixed(2)}</p>
      )}
    </body>
  );
}
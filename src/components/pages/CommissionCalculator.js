import { useState } from "react";

export default function CommissionCalculator({ onNext }) {

  return (
    <div className="calculator">
      <h1>Hello, Bahar.</h1>
      <p>Ready to make something new?</p>

      <div className="button-container">
      <button className="bottom-btn" onClick={onNext}>Create</button>
      </div>
    </div>
  );
}
export default function Result({ data, onRestart }) {
    const amount = parseFloat(data?.amount || 0);
    const commission = amount * 0.1; // Example: 10%
    return (
        <div className="calculator">
        <div className="result-container">
            <h1>Result</h1>
            <p>The amount you entered is: <p>Amount: ${amount.toFixed(2)}</p></p>

            <button className="bottom-btn" onClick={onRestart}>Back to Home</button>
        </div>
        </div>
    );
}
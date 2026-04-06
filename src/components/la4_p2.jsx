import { useState } from "react";

function La4P2() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subNumbers = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h2>Sai Suchith 24BCE0092</h2>

      <h3>Simple Calculator</h3>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={addNumbers}>Add</button>
      <button onClick={subNumbers} style={{ marginLeft: "10px" }}>
        Subtract
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default La4P2;
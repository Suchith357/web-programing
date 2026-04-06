import { useState } from "react";

function La4P4() {
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [average, setAverage] = useState(0);
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    const avg = (Number(m1) + Number(m2) + Number(m3)) / 3;
    setAverage(avg.toFixed(2));

    if (avg >= 90) setGrade("A");
    else if (avg >= 75) setGrade("B");
    else if (avg >= 60) setGrade("C");
    else if (avg >= 50) setGrade("D");
    else setGrade("F");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Sai Suchith 24BCE0092</h2>

      <h3>Grade Calculator</h3>

      <input
        type="number"
        placeholder="Enter marks 1"
        value={m1}
        onChange={(e) => setM1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter marks 2"
        value={m2}
        onChange={(e) => setM2(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter marks 3"
        value={m3}
        onChange={(e) => setM3(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateGrade}>Calculate</button>

      <h3>Average: {average}</h3>
      <h3>Grade: {grade}</h3>
    </div>
  );
}

export default La4P4;
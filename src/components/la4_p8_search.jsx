import { useState } from "react";

function Search({ onSearch }) {
  const [country, setCountry] = useState("");

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={() => onSearch(country)} style={{ marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
}

export default Search;
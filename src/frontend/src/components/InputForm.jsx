import React, { useState } from "react";

function InputForm({ onFetch }) {
  const [numberId, setNumberId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!["p", "f", "e", "r"].includes(numberId)) {
      alert("Invalid ID! Use 'p', 'f', 'e', or 'r'.");
      return;
    }
    onFetch(numberId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Number ID (p, f, e, r):
        <input
          type="text"
          value={numberId}
          onChange={(e) => setNumberId(e.target.value)}
        />
      </label>
      <button type="submit">Fetch Data</button>
    </form>
  );
}

export default InputForm;

import React, { useState } from "react";
import InputForm from "../frontend/src/components/InputForm";
import ResponseDisplay from "../frontend/src/components/ResponseDisplay";

function App() {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async (numberId) => {
    try {
      const res = await fetch(`http://localhost:9876/numbers/${numberId}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <InputForm onFetch={fetchData} />
      {responseData && <ResponseDisplay data={responseData} />}
    </div>
  );
}

export default App;

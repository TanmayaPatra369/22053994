import React from "react";

function ResponseDisplay({ data }) {
  return (
    <div>
      <h2>API Response:</h2>
      <p>
        <strong>Previous Window State:</strong>{" "}
        {JSON.stringify(data.windowPrevState)}
      </p>
      <p>
        <strong>Current Window State:</strong>{" "}
        {JSON.stringify(data.windowCurrState)}
      </p>
      <p>
        <strong>Numbers:</strong> {JSON.stringify(data.numbers)}
      </p>
      <p>
        <strong>Average:</strong> {data.avg}
      </p>
    </div>
  );
}

export default ResponseDisplay;

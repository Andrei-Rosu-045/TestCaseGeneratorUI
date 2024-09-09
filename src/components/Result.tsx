import React, { useState } from 'react';
import './Result.css';

const Result: React.FC = () => {
  const [resultText, setResultText] = useState<string>('');

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([resultText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "result.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="result-container card custom-card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Your Results</h5>
      </div>
      <textarea
        className="result-textarea"
        value={resultText}
        onChange={(e) => setResultText(e.target.value)}
        placeholder="Results will be displayed here..."
      ></textarea>
      <button className="download-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default Result;

import React, { useState } from "react";
import Navbar from "./Navbar";
import { Client } from "@gradio/client";
import "./MainApp.css";

function MainApp() {
  const [userPrompt, setUserPrompt] = useState("");
  const [inputTest, setInputTest] = useState("");
  const [outputTest, setOutputTest] = useState("");
  const [temperature, setTemperature] = useState(0.5);
  const [maxTokens, setMaxTokens] = useState(1024);
  const [topP, setTopP] = useState(0.95);
  const [reasonerNum, setReasonerNum] = useState(3);
  const [testCaseNum, setTestCaseNum] = useState(7);
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // State to track processing status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true); // Set processing state to true
    setResult(null); // Clear previous results
  
    try {
      const client = await Client.connect("eternalBlissard/ThoughtCODER");
      const response = await client.predict("/predict", {
        user_prompt: userPrompt,
        input_test: inputTest,
        output_test: outputTest,
        temperature,
        max_tokens: maxTokens,
        top_p: topP,
        reasoner_num: reasonerNum,
        test_case_num: testCaseNum,
      });
  
      // Clean up the output to make it readable
      const cleanedResult = response.data.map((item) =>
        item.replace(/\\n/g, "\n") // Replace `\n` with actual newlines
      );
      setResult(cleanedResult);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsProcessing(false); // Stop processing after the response or error
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="mainapp-container">
        <div className="input-section">
          <h2>Inputs</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User Prompt:</label>
              <input
                type="text"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Input Test:</label>
              <input
                type="text"
                value={inputTest}
                onChange={(e) => setInputTest(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Output Test:</label>
              <input
                type="text"
                value={outputTest}
                onChange={(e) => setOutputTest(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Temperature: {temperature}</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Max Tokens: {maxTokens}</label>
              <input
                type="range"
                min="128"
                max="4096"
                step="1"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Top P: {topP}</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.05"
                value={topP}
                onChange={(e) => setTopP(parseFloat(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Reasoner Num: {reasonerNum}</label>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={reasonerNum}
                onChange={(e) => setReasonerNum(parseInt(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Test Case Num: {testCaseNum}</label>
              <input
                type="range"
                min="3"
                max="11"
                step="1"
                value={testCaseNum}
                onChange={(e) => setTestCaseNum(parseInt(e.target.value))}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* <div className="output-section">
            <h2>Output</h2>
            {isProcessing ? (
                <div className="processing-animation">Processing Code...</div>
            ) : result ? (
                <pre>
                {result.map((item, index) => (
                    <code key={index}>{item}</code>
                ))}
                </pre>
            ) : (
                <p>No output yet. Submit the form to get a response.</p>
            )}
        </div> */}
        <div className="output-section">
            <h2>Output</h2>
            {isProcessing ? (
                <div className="processing-animation">Processing Code...</div>
            ) : result ? (
                <pre>
                {result.map((item, index) => (
                    <code key={index}>{item}</code>
                ))}
                </pre>
            ) : (
                <p className="para">No output yet. Submit the form to get a response.</p>
            )}
        </div>

      </div>
    </div>
  );
}

export default MainApp;

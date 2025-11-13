import React, { useState } from "react";
import axios from "axios";

function ChatBot({ user }) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a query");
      return;
    }

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text:` You can give a professional answer to any query.,`
                },
                {
                  text: `User query: ${query} maximum 100 words answer`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": "AIzaSyD01g4rMOkcIoifQILp8HTRZZa1bCXOTCE",
          },
        }
      );

      // Response se answer nikaalna
      const text = res.data.candidates[0]?.content?.parts?.[0]?.text;
      setAnswer(text);
    } catch (error) {
      alert("Error fetching answer");
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <p>Welcome, {user.name}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" id="query" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter your question..."/>
        <button type="submit" >Get Answer</button>
      </form>

      <div id="answer" style={{ marginTop: "20px" }}>
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default ChatBot;
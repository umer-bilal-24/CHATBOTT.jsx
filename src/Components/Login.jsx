import React, { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && password) {
      onLogin({ name, email });
    } else {
      alert("Please fill all fields");
    }
  };  

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
          </label>
        </div>

        <div>
          <label>
            Email: <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your mail"/>
          </label>
        </div>

        <div>
          <label>
            Password: <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter strong password"/>
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
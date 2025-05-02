import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="form-container">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default App;

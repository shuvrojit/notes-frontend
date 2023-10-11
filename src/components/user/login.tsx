import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import login from "../../services/login";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(`${email} + ${password}`)

    try {
      const user = await login({
        email, password,
      })
      setUser(user)
      setEmail("")
      setPassword("")
      redirect("/")
      console.log(user)

    } catch (exception) {
      setErrorMessage("Wrong credentials")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <>
      <div className="container">
        <img width="150px" src={Logo} alt="logo" />
        <form
          className="container"
          onSubmit={handleLogin}
        >
          <div className="label-input-container">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              value={email}
              placeholder="Email"
              type="email"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              value={password}
              placeholder="Password"
              type="password"
            />
          </div>

          <button className="primary-btn">Log In</button>
          <p>
            Don't have an account? <Link to="/signup"> Sign Up </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LogIn;

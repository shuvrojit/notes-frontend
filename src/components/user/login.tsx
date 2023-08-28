import { useState } from "react"
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.svg"

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>

      <div className="container">
        <img width="150px" src={Logo} alt="logo" />
      <form className="container" onSubmit={(e) => {e.preventDefault()}} >

        <div className="label-input-container">
        <label htmlFor="email">
          Email
        </label>
          <input onChange={(e) => {
        e.preventDefault()
        setEmail(e.target.value)
      }} id="email" value={email} placeholder="Email" type="email" />
          </div>


        <div className="label-input-container">
        <label htmlFor="password">
          Password
        </label>
          <input onChange={(e) => {
        e.preventDefault()
        setPassword(e.target.value)
      }} id="password" value={password} placeholder="Password" type="password" />
          </div>

        <button className="primary-btn">Log In</button>
        <p>Don't have an accoun? <Link to="/signup"> Sign Up </Link></p>

        </form>
          </div>
    </>
  )
}


export default LogIn

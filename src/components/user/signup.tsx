import {useState} from "react"
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.svg"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <>

      <div className="container">
        <img width="150px" src={Logo} alt="logo" />
      <form className="container" onSubmit={(e) => {e.preventDefault()}} >

        <div className="label-input-container">
        <label htmlFor="first-name">
         First Name
        </label>
          <input onChange={(e) => {
        e.preventDefault()
        setFirstName(e.target.value)
      }} id="first-name" value={firstName} placeholder="First Name" type="text" />
        </div>

        <div className="label-input-container">
        <label htmlFor="last-name">
          Last Name
        </label>
          <input onChange={(e) => {
        e.preventDefault()
        setLastName(e.target.value)
      }} id="last-name" value={lastName} placeholder="Last Name" type="text" />
          </div>

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
        <button className="primary-btn">Sign Up</button>
        <p>Already have an account? <Link to="/login">Log In</Link></p>

        </form>
          </div>
    </>
  )
}

export default SignUp

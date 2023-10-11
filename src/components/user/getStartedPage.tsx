import Logo from "../../assets/logo.svg";
import noteTaking from "../../assets/note_taking.svg";
import { Link } from "react-router-dom";

const GetStartedPage = () => {
  return (
    <>
      <div className="container">
        <img width="150px" src={Logo} alt="logo" />
        <img
          max-width="500px"
          width="100%"
          margin="5rem"
          src={noteTaking}
          alt="note taking"
        />
        <Link to="/signup">
          {" "}
          <button className="sceondary-btn">Get Started</button>
        </Link>
        <Link to="/login">
          {" "}
          <button className="primary-btn">Log In</button>
        </Link>
      </div>
    </>
  );
};

export default GetStartedPage;

import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {login} from "../../store/session";
import {useDispatch} from "react-redux";
import {useModal} from "../../context/Modal";
import "../CSS/john.css";


function LoginFormModal() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const {closeModal} = useModal();
  // const baseUrl = process.env.BASE_URL;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
      push("/posts/current");
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("Demouser@gmail.com", "password"));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
      push("/posts/current");
    }
  };

  return (
    <div className="login-modal-container">
      <h1 className="Login-h1">Log In</h1>

        {/* Google Auth */}
        <a href={"/api/auth/oauth_login"}>
          <button>OAUTH</button>
        </a>

      <form onSubmit={handleSubmit} className="login-form-modal">
        <ul className="list-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>


        <label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-modal-input"
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-modal-input"
          />
        </label>
        <button type="submit" className="login-button">
          Log In
        </button>
        <button onClick={handleDemo} id="demo-button">
          Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginFormModal;

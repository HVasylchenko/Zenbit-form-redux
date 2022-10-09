import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, password } from "../redux/reducers/authReducer";

function LoginPage() {
  const state = useSelector((state) => state.auth);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const handlerLogin = (event) => {
    setLoginValue(event.target.value);
  };

  const handlerPassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const handlerButton = () => {
    dispatch(login(loginValue));
    dispatch(password(passwordValue));
    setLoginValue("");
    setPasswordValue("");
  };

  return (
    <section className=" d-flex flex-column mx-auto  w-25">
      <h1> Reach out to us!</h1>
      <input
        className="btn mt-2 mb-2"
        type="text"
        name="login"
        id="login"
        value={loginValue}
        placeholder="Enter login"
        onChange={handlerLogin}
      />
      <input
        className="btn mt-2 mb-2"
        type="password"
        name="password"
        id="password"
        value={passwordValue}
        placeholder="Enter password"
        onChange={handlerPassword}
      />
      <div>
        <button className="btn btn-primary mt-2 mb-2" onClick={handlerButton}>
        Dispatch to store
        </button>
      </div>
      <div>{state.login}</div>
      <div>{state.password}</div>
    </section>
  );
}
export default LoginPage;

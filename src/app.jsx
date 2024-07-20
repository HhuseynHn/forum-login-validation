/** @format */
import React from "react";
import LoginPage from "./pages/login/login-page";
function App() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const emailRef = useRef(0);
  // const passwordRef = useRef(0);

  // function hundleBtn() {
  //   // console.log(email, password);
  //   console.log(emailRef.current.value);
  //   console.log(passwordRef.current.value);
  //   console.log(emailRef);
  //   console.log(passwordRef);
  // }

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;

{
  /* <div className="forum-container">
  <input
    type="email"
    placeholder={"Email"}
    ref={emailRef}
    />
  <input
    type="password"
    placeholder={"Password"}
    ref={passwordRef}
    />
  <button onClick={() => hundleBtn()}>Login</button>
  <h2>{emailRef.current.value}</h2>
  <h2>{passwordRef.current.value}</h2>
</div>; */
}
// onChange={(e) => setEmail(e.target.value)
// }
// onChange={(e) => setPassword(e.target.value)}

{
  /* <h2>{email}</h2>
      <h2>{password}</h2> */
}

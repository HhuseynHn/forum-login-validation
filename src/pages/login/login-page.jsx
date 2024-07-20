/** @format */
import React, { useRef, useState } from "react";
import Input from "../../component/reusable/input/input";
import "./login-style.css";
import Button from "../../component/reusable/button/button";
import Title from "../../component/title/title";
import "../../component/reusable/icons/icon-style.css";
import FontAwesomeIcon from "../../component/reusable/icons/placeholderIcon";
import ValidatedText from "../../component/reusable/validation/validation-text";
const LoginPage = () => {
  const emailRef = useRef(0);
  const passwordRef = useRef(0);
  let [validationText, setvalidationText] = useState("hide-validation");
  let [inputBorderEmail, setinputBorderEmail] = useState("input-login");
  let [inputBorderPassword, setinputBorderPassword] = useState("input-login");
  let [validationTextPsword, setValidationTextPsword] =
    useState("hide-validation");
  let [passwordVisiblte, setPasswordVisiblte] = useState(false);
  useState("hide-validation");

  function hundleBtn() {
    if (emailRef.current.value == "") {
      setvalidationText("validation-email");
      setinputBorderEmail("input-login show-boreder");
    } else {
      setvalidationText("hide-validation");
      setinputBorderEmail("input-login");
    }

    if (passwordRef.current.value == "") {
      setValidationTextPsword("validation-paswrd");
      setinputBorderPassword("input-login show-boreder");
    } else {
      setValidationTextPsword("hide-validation");
      setinputBorderPassword("input-login");
    }
  }

  function hundleVsbleBtn() {
    setPasswordVisiblte((prevVsblity) =>
      prevVsblity === "password" ? "text" : "password"
    );
  }
  return (
    <>
      <div className="login-container">
        <div className="inner-distance">
          <div className="opacity-size"></div>
          <Title>Login Form</Title>
          <div className="input-container">
            <Input
              type={"email"}
              placeHolder={"Email"}
              refValue={emailRef}
              className={inputBorderEmail}
            />
            <FontAwesomeIcon icon={"fa-solid  fa-envelope"} />
            <ValidatedText className={validationText}>
              Email can't be blank
            </ValidatedText>
          </div>
          <div className="input-container">
            <Input
              type={passwordVisiblte ? "text" : "password"}
              placeHolder={"Password"}
              refValue={passwordRef}
              className={inputBorderPassword}
            />
            <FontAwesomeIcon icon={"fa-solid  fa-lock"} />
            {/* <FontAwesomeIcon icon="fa-regular fa-eye" /> */}
            <FontAwesomeIcon
              icon={`fa-solid ${[
                passwordVisiblte
                  ? "eye-icon-gnrl fa-eye-slash"
                  : "eye-icon-gnrl fa-eye",
              ]}`}
              onClick={() => setPasswordVisiblte(!passwordVisiblte)}
            />
            <ValidatedText className={validationTextPsword}>
              Password can't be blank
            </ValidatedText>
            <div className="forgot-paswr-cont">
              <ValidatedText className={"forgt-paswrd"}>
                Forgot password?
              </ValidatedText>
            </div>
          </div>
          <div className="login-btn-cntr">
            <Button className={"login-btn"} onClick={() => hundleBtn()}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import { useState } from "react";

export default function LoginState() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !userInfo.email.includes("@");

  function handleUserInfoChange(event) {
    const { name, value } = event.target;

    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [name]: false }));
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [identifier]: true }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInfoChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

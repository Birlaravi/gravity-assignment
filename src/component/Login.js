import React, { useState } from "react";
import axios from "axios";
function Login({ loginHandle }) {
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [login, setlogin] = useState({});
  const [showerr, seterr] = useState(null);

  const Token = "Prb27JHG@hjhgkjhjsJH!JHGKNknvsgGJKp06HGFhf";

  //submit handler
  const submitHandler = async () => {
    await axios
      .post(
        "https://gravitinfosystems.com/Development/Doctor_App/public/DocApp/Login",
        { Token, Mobile, Password }
      )
      .then((res) => {
        console.log('show res ',res);
        if (res.data.Status === false) {
          seterr(res.data.Msg);
          console.log('show err',res.data)
        } else {
          setlogin(res.data);
        }
      });
    return login;
  };

  //for handling pages
  let status = login?.Status;
  if (status) {
    loginHandle(false);
  } else {
    loginHandle(true);
  }

  return (
    <div className="container d-flex justify-content-center flex-column align-items-center">
      <div className="img d-flex justify-content-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
      </div>
      <form
        className="d-flex flex-column w-25 border bg-dark text-white p-4 rounded-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mobile
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
      {/* for showing credentials err */}
      {showerr && <div className="invalid">{showerr}</div>}
    </div>
  );
}

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { emailFormSchema } from "../schemas/emailFormSchema";
import motorcycle_1 from "../assets/motorcycle_1.png";
import alphaService from "../assets/alphaService.png";
import alphaLogo from "../assets/alphaLogo.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailFormSchema,
      onSubmit: (values) => {
        localStorage.setItem("dataKey", JSON.stringify(values));
        navigate("/my-orders");
      },
    });

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="alpha-logo">
          <img src={alphaLogo} />
          <h1>alpha</h1>
        </div>
        <div className="login-main-container">
          <div className="welcome-message">
            <h3>Welcome to</h3>
            <h1>alpha service</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="label-container">
              <label htmlFor="email">Email address</label>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="button-container">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right">
        <div className="motorcycle_1-container">
          <img className="login-motorcycle_1" src={motorcycle_1} />
          <div className="login_alpha_service-container">
            <img className="login_alpha_service" src={alphaService} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

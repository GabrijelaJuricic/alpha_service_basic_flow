import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { emailFormSchema } from "../schemas/emailFormSchema";
import motorcycle_login from "../assets/motorcycle_login.png";
import alphaService from "../assets/alphaService.png";
import alphaLogo from "../assets/alphaLogo.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");

  // useFormik hook
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailFormSchema,
      onSubmit: (values) => {
        localStorage.setItem("email", JSON.stringify(values.email));
        navigate("/my-orders");
      },
    });
  // ---

  return (
    <div className="login-container">
      <div className="login-left-side">
        <div className="alpha-logo">
          <img src={alphaLogo} />
          <h1>alpha</h1>
        </div>
        <div className="welcome-message">
          <h3>Welcome to</h3>
          <h1>alpha service</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
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
              <p className="error-message">{errors.email}</p>
            )}
          </div>
          <div className="button-container">
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
      <div className="login-right-side">
        <div className="motorcycle-login-container">
          <img src={motorcycle_login} alt="motorcycle-login" />
        </div>
        <div className="alpha-service-banner-container">
          <img src={alphaService} alt="alpha-service-banner" />
        </div>
      </div>
    </div>
  );
};

export default Login;

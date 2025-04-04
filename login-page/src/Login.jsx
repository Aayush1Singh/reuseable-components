/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="login-background absolute flex h-full w-full justify-between">
      <div className="login-background-bottom absolute"></div>
      <p className="site-name">काव्य पथ</p>
      <p className="background-text">शब्दों का संगम, भावनाओं का मंच।</p>
      <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
        {/* Circular Icon */}
        <div className="login-icon h-fit">M</div>

        {/* Title */}
        <h2 className="login-title">Login</h2>

        {/* Email Input */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            required
            {...register("email")}
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            {...register("password")}
          />
        </div>

        {/* Submit Button */}
        <button className="login-button" type="submit">
          Let's Get Started
        </button>

        {/* Links */}
        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>

        {/* Footer Text */}
        <p className="login-footer"></p>
      </form>
    </div>
  );
};

export default Login;

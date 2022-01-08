import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  max-width: 40%;
  margin: 100px auto;
  display: grid;
  border: 1px solid lightgray;
  padding: 20px;
  grid-gap: 15px;
  grid-template-columns: auto auto;
  & input[type="submit"] {
    width: 75%;
    border: none;
    background-color: blue;
    color: white;
    font-weight: 400;
    font-size: 15px;
    height: 40px;
    margin: auto;
    border-radius: 5px;
  }
`;
const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const [signUp, setSignUp] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(signUp);
  };

  const handleRegister = async (e) => {
    try {
      await axios
        .post(`http://localhost:4000/signup`, {
          first_name: e.first_name,
          last_name: e.last_name,
          email: e.email,
          password: e.password,
        })
        .then((res) => {
          alert(`${e.first_name} you are register check you ${e.email}`);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <TextField
            name="first_name"
            label="First Name"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="last_name"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </Form>
    </>
  );
};

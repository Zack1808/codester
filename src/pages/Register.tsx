import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

import { Container, Button, Input } from "../components";

import "../css/pages/Register.css";

const Register: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Container direction="vertical">
        <h2>Register</h2>

        <div className="register-options">
          <div className="register-social-media">
            <Button primary>
              <FaGithub style={{ fontSize: "1.5rem" }} />
              Github
            </Button>
            <Button primary>
              <FaGoogle style={{ fontSize: "1.5rem" }} /> Google
            </Button>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Username"
              name="username"
              required
              placeholder="Codemaster"
            />
            <Input
              type="email"
              label="Email"
              name="email"
              required
              placeholder="codemaster@gmail.com"
            />
            <Input
              type="password"
              label="Password"
              required
              placeholder="Password"
            />
            <Button primary>Register</Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import { isUserNameValid } from "../modules/domain/userName";
import { isUserEmailValid } from "../modules/domain/userEmail";
import { isUserPasswordValid } from "../modules/domain/userPassword";

interface formProps {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<formProps>({
    name: "",
    email: "",
    password: "",
  });

  const formData: formProps = { name, email, password };

  useEffect(() => {
    const isNameValid: boolean = isUserNameValid(name);
    const isEmailValid: boolean = isUserEmailValid(name);
    const isPasswordValid: boolean =
      isUserPasswordValid.containsSpecialCharacter(name);
    const errors = () => {
      if (!isNameValid || !isEmailValid || !isPasswordValid)
        setError({
          name: isNameValid ? "" : "Name is not valid",
          email: isEmailValid ? "" : "Email is not valid",
          password: isPasswordValid ? "" : "Password not valid",
        });
    };
    errors();
  }, [formData]);

  return (
    <div className="grid h-screen">
      <div className="w-1/3 h-1/2 self-center justify-self-center bg-blue-200">
        <h1 className="text-center py-4">Registrarse</h1>
        <div className="grid w-1/2 space-y-4">
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <p>{error?.name ? error?.name : ""}</p>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{error?.email ? "Error" : ""}</p>
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{error?.password ? "Error" : ""}</p>
        </div>
      </div>
    </div>
  );
}

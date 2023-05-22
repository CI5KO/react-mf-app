import React, { useState, useEffect } from "react";
import { createBackEndRepo } from "../modules/infraestructure/backendRepo";
import { isUserNameValid } from "../modules/domain/userName";
import { isUserEmailValid } from "../modules/domain/userEmail";
import { isUserPasswordValid } from "../modules/domain/userPassword";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleClick = () => {
    createBackEndRepo().create({
      id: "",
      name,
      email,
      password,
      isAdmin: false,
      isFormDone: false,
    });
  };

  return (
    <div className="grid h-screen">
      <div className="w-1/3 h-1/2 self-center justify-self-center bg-blue-200">
        <h1 className="text-center py-4">Registrarse</h1>
        <div className="grid w-1/2 space-y-4">
          <input
            placeholder="Name"
            onChange={(e) => {
              if (!isUserNameValid(e.target.value))
                setNameError("Name not Valid!");
              if (isUserNameValid(e.target.value)) setNameError("");
              setName(e.target.value);
            }}
          />
          <p>{nameError}</p>
          <input
            placeholder="Email"
            onChange={(e) => {
              if (!isUserEmailValid(e.target.value))
                setEmailError("Email not valid!");
              if (isUserEmailValid(e.target.value)) setEmailError("");
              setEmail(e.target.value);
            }}
          />
          <p>{emailError}</p>
          <input
            placeholder="Password"
            onChange={(e) => {
              if (!isUserPasswordValid.containsSpecialCharacter(e.target.value))
                setPasswordError("Password not valid!");
              if (isUserPasswordValid.containsSpecialCharacter(e.target.value))
                setPasswordError("");
              setPassword(e.target.value);
            }}
          />
          <p>{passwordError}</p>
          <button onClick={handleClick}>Submit!</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function RegisterForm() {
  return (
    <div className="grid h-screen">
      <div className="w-1/3 h-1/2 self-center justify-self-center bg-blue-200">
        <h1 className="text-center py-4">Registrarse</h1>
        <div className="grid w-1/2 space-y-4">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
        </div>
      </div>
    </div>
  );
}

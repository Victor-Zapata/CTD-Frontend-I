import React, { useEffect, useState } from "react";

const RepasoUseEffect = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const { username, email } = form;

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //ahora uso el useEffect
  useEffect(() => {
    console.log("useEffect was called");
  }, []);

  useEffect(() => {
    console.log("useEffect was called with dependency form");
  }, [form]);

  return (
    <>
      <h2>RepasoUseEffect</h2>

      <input
        type="text"
        className="form-control"
        placeholder="username"
        value={username}
        onChange={onInputChange}
        name="username"
      />

      <input
        style={{ marginTop: "1rem" }}
        type="email"
        className="form-control"
        placeholder="victor@victor.com"
        value={email}
        onChange={onInputChange}
        name="email"
      />
    </>
  );
};

export default RepasoUseEffect;

import { useState } from "react";
import { saveUserCredentials } from "../../utils/auth";

import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUsername = "usuario_prueba";
    const validPassword = "contraseña_prueba";
    if (
      formData.username === validUsername &&
      formData.password === validPassword
    ) {
      saveUserCredentials(formData.username);
      navigate("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <form className="p-12 md:p-24" onSubmit={handleSubmit}>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input
          type="text"
          id="email"
          className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder="edwardb11"
          name="username" 
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input
          type="password"
          id="password"
          className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder="Password"
          name="password" 
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
        type="submit">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;

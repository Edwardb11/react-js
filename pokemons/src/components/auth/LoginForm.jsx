import { useState } from "react";
import { login } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [generatedCredentials, setGeneratedCredentials] = useState(null); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUsername = "test";
    const validPassword = "test";

    if (
      (formData.username === validUsername &&
        formData.password === validPassword) ||
      (formData.username === generatedCredentials?.username &&
        formData.password === generatedCredentials?.password)
    ) {
      dispatch(login(formData.username));
      navigate("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const generateRandomCredentials = () => {
    const randomUsername = Math.random().toString(36).substring(7); 
    const randomPassword = Math.random().toString(36).substring(7); 
    setGeneratedCredentials({
      username: randomUsername,
      password: randomPassword,
    });
    setFormData({ username: randomUsername, password: randomPassword });
  };

  return (
    <form className="p-12 md:p-24" onSubmit={handleSubmit}>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input
          type="text"
          className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input
          type="password"
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
      <button
        className=" text-blue-900 font-medium p-2 md:p-4 mt-4  w-full"
        type="button"
        onClick={generateRandomCredentials}>
        Generar credenciales aleatorias
      </button>
      {generatedCredentials && (
        <div className="mt-4">
          <p>Credenciales generadas:</p>
          <p>Usuario: {generatedCredentials.username}</p>
          <p>Contraseña: {generatedCredentials.password}</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;

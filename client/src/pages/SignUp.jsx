import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State variables
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.username && formData.password && formData.email) {
      try {
        setMessage("");
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        // Update the message, success, and loading states based on the server response
        setMessage(data.message);
        setSuccess(data.success);
        setLoading(false);
      } catch (error) {
        console.log(error);

        // Handle the case where the server is not responding
        setSuccess(false);
        setMessage("Server is not responding. Please try again later.");
        setLoading(false);
      }
    } else {
      // Display an error message if any of the input fields is empty
      setMessage("Please fill in all input fields");
      setSuccess(false);
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto my-8 border rounded-lg shadow-lg max-[520px]:mx-3">
      <h1 className="text-3xl text-center font-medium my-8">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3">
        <input
          className="bg-white p-3 outline-none border rounded-md"
          id="username"
          onChange={handleChange}
          type="text"
          placeholder="Username"
        />
        <input
          className="bg-white p-3 outline-none border rounded-md"
          id="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-white p-3 outline-none border rounded-md"
          id="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        {message && (
          <p className={`text-${success === true ? "green" : "red"}-500`}>
            {message}
          </p>
        )}

        <button
          className="text-white text-lg rounded-md p-3 bg-blue-600 hover:opacity-90"
          type="submit"
        >
          {`${loading ? "Loading" : "Signup"}`}
        </button>
      </form>

      <div className="mb-7">
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

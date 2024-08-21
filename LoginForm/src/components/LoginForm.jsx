import React, { useRef } from 'react';

const LoginForm = () => {
  // Create refs for the username and password input fields
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Retrieve the input values using the refs
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Show an alert with the username and password
    alert(`Username: ${username}\nPassword: ${password}`);

    // Clear the input fields
    usernameRef.current.value = '';
    passwordRef.current.value = '';

    // Focus back on the username input field
    usernameRef.current.focus();
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            ref={usernameRef}
            type="text"
            placeholder="Enter your username"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

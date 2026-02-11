import React, { useState } from 'react';
import '../styles/Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }
    onLogin(username);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>PostreLab 🍰</h1>
        <p className="login-subtitle">Envío de postres a tu hogar</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tu nombre</label>
            <input
              id="username"
              type="text"
              placeholder="Ingresa tu nombre"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              className={error ? 'input-error' : ''}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <button type="submit" className="btn-primary btn-large">
            Ingresar
          </button>
        </form>

        <p className="login-info">
          ℹ️ Solo ingresa tu nombre
        </p>
      </div>
    </div>
  );
}

export default Login;

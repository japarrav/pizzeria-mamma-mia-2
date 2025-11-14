import { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar errores cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    setSuccessMessage('');
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar que todos los campos estén llenos
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    }

    // Validar longitud de la contraseña
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Si no hay errores, mostrar mensaje de éxito
      setSuccessMessage('¡Autenticación exitosa! Bienvenido de vuelta 🍕');
      setErrors({});
      // Limpiar el formulario
      setFormData({
        email: '',
        password: ''
      });
    } else {
      // Si hay errores, mostrarlos
      setErrors(newErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card">
              <div className="login-header">
                <h2>🍕 Login</h2>
                <p className="text-muted">Ingresa a tu cuenta</p>
              </div>

              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Tu contraseña"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <div className="login-footer">
                <p className="text-muted mb-0">
                  ¿No tienes cuenta? <a href="#register">Regístrate aquí</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

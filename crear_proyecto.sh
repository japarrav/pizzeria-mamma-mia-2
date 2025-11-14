#!/bin/bash

# Crear todos los componentes y utilidades

# Navbar.jsx
cat > src/components/Navbar.jsx << 'EOF'
import { formatPrice } from '../utils/formatPrice';
import './Navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          🍕 Pizzería Mamma Mía
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">
                🍕 Home
              </button>
            </li>
            
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">
                    🔐 Register
                  </button>
                </li>
              </>
            )}
            
            <li className="nav-item">
              <button className="btn btn-outline-warning">
                🛒 Total: ${formatPrice(total)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
EOF

# Navbar.css
cat > src/components/Navbar.css << 'EOF'
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-item button {
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-item button:hover {
  transform: translateY(-2px);
}
EOF

echo "Proyecto configurado exitosamente!"

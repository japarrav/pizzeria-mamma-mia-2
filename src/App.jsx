import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/*<Home />*/}
        <RegisterPage/>
        <LoginPage /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;

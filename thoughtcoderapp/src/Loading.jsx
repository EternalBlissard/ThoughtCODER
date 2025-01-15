import { useEffect } from 'react';
import './Loading.css';
import Navbar from './Navbar.jsx';

function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/mainapp'; // Redirect to mainapp after loading
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="loading">
        <div className="spinner"></div>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;

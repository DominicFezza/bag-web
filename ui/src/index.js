import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



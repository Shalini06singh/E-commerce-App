// import logo from './logo.svg';
// import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Router from './router/Router';

function App() {
  return (
    <div>
      <Header/>
      <Router />

      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
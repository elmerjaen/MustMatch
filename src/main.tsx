import { AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import SignDetection from './features/SignDetection/components/SignDetection';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign-detection" element={<SignDetection />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>,
  document.getElementById('root')
);

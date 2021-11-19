import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import SignDetection from './features/SignDetection/components/SignDetection';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sign-detection" element={<SignDetection />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

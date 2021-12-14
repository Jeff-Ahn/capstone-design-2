import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

dotenv.config();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

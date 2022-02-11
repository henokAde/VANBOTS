import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import {ContextProvider} from "./context/Context"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
// import reportWebVitals from './reportWebVitals';

const supportedChainIds = [1, 3, 4, 137]
  const connectors = {
    injected: {}
  };

ReactDOM.render(
  <ThirdwebWeb3Provider 
  connectors={connectors} 
  supportedChainIds={supportedChainIds}
 >
  <ContextProvider>
    <ToastContainer className="toastContainer top-center"/>
    <React.StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
  </ThirdwebWeb3Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

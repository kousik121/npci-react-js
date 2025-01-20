import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.js';
import reducera from './reducera.js';

//const store = createStore(reducer);
const store = createStore(reducera);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)

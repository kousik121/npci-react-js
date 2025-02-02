import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer.js';
import reducera from './reducera.js';
import reducerb from './reducerb.js';
import reducerc from './reducerc.js';
import { thunk } from 'redux-thunk';
import reducerd from './reducerd.js';

//const store = createStore(reducer);
//const store = createStore(reducera);
// const store = createStore(reducerb);
const store = createStore(reducerc, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)

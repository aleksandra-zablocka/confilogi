// import React from 'react';
// import { App } from 'App';

// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// // import { Provider } from 'react-redux';
// // import { store, persistor } from './redux/store';
// // import { PersistGate } from 'redux-persist/integration/react';

// // import './index.scss';
// import './index.scss';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}> */}
//     <BrowserRouter basename="/confilogi">
//       <App />
//     </BrowserRouter>
//     {/* </PersistGate>
//     </Provider> */}
//   </React.StrictMode>
// );

import React from 'react';
import { App } from 'App';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/confilogi">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

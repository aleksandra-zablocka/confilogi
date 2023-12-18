// import React from 'react';

// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import { Loader } from 'components/Loader/Loader';
// import { Home } from 'pages/Home/Home';
// import { SharedLayout } from 'components/SharedLayout/SharedLayout';

// export const App = () => {
//   return (
//     <div>
//       <SharedLayout>
//         <Home />
//       </SharedLayout>
//     </div>
//   );
// };

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import { Features } from './pages/Features/Features.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Pricing } from './pages/Pricing/Pricing';

export const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </SharedLayout>
  );
};

import React from 'react';

// import { Routes, Route, Navigate } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { Home } from 'pages/Home/Home';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <SharedLayout />
      <Home />
    </div>
  );
};

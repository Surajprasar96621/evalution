import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'PrivateRoute';
import LoginPage from 'LoginPage';
import HomePage from 'HomePage';
import ProductDetailsPage from 'ProductDetailsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="productId" element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/Layout'; // Import the Layout component
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import OrderStatusPage from './pages/OrderStatusPage';
import ManageRestaurantPage from './pages/ManageRestaurantPage';

; // Import the AuthCallBackPage component

const Approutes = () => {
    return (
        <Routes>
          <Route
            path="/"
            element={
              <Layout showHero>
                <HomePage />
              </Layout>
            }
          />
          <Route path="/auth-callback" element={<AuthCallBackPage />} />
          <Route
            path="/search/:city"
            element={
              <Layout showHero={false}>
                <SearchPage />
              </Layout>
            }
          />
          <Route
            path="/detail/:restaurantId"
            element={
              <Layout showHero={false}>
                <DetailPage />
              </Layout>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/order-status"
              element={
                <Layout>
                  <OrderStatusPage />
                </Layout>
              }
            />
            <Route
              path="/user-profile"
              element={
                <Layout>
                  <UserProfilePage />
                </Layout>
              }
            />
            <Route
              path="/manage-restaurant"
              element={
                <Layout>
                  <ManageRestaurantPage />
                </Layout>
              }
            />
          </Route>
    
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      );
};

export default Approutes;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generator from "./pages/Generator";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import Maker from "./pages/Maker";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Services from "./pages/Services";
import MemoryDetail from "./pages/MemoryDetail";
import Profile from "./pages/Profile";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import styled from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";

/*
Idendentation of route in routes is necessary for rendering sidebar on certain pages and not other 
*/

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<PrivateRoute><Home/></PrivateRoute>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/generator" element={<Generator />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/maker" element={<Maker />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/services" element={<Services />} />
              <Route path="/memory/:memoryId" element={<MemoryDetail />} />
              <Route path="/profile/:profileId" element={<Profile />} />
            </Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
};

const Container = styled.div`
display: flex;
`;

export default App;

import React from "react";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./layouts/Create";
import Profile from "./layouts/Profile";
import DashBoard from "./layouts/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <RootLayout />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

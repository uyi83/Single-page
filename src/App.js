// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import TopBar from "./components/TopBar/index";
import UserList from "./components/UserList/index";
import UserDetail from "./components/UserDetail/index";
import UserPhotos from "./components/UserPhotos/index";

// eslint-disable-next-line strict
function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <Container>
          <Box sx={{ display: "flex", mt: 5 }}>
            <Box sx={{ width: "25%", pr: 5 }}>
              <UserList />
            </Box>
            <Box sx={{ width: "75%" }}>
              <Routes>
                <Route path="/users/:userId" element={<UserDetail />} />
                <Route path="/photos/:userId" element={<UserPhotos />} />
                <Route path="/" element={<div />} />{" "}
                {/* Trang mặc định trống */}
              </Routes>
            </Box>
          </Box>
        </Container>
      </Box>
    </Router>
  );
}

export default App;

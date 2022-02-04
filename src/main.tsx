import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NiceModal from "@ebay/nice-modal-react";

import Goals from "./pages/PageGoals/PageGoals";
import Goal from "./pages/PageGoal/PageGoal";
import Home from "./pages/PageHome/PageHome";
import Dreams from "./pages/PageDreams/PageDreams";
import Dream from "./pages/PageDream/PageDream";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import NotFound from "./pages/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <NiceModal.Provider>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dreams" element={<Dreams />} />
            <Route path="/dream/:id" element={<Dream />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/goal/:id" element={<Goal />} />
            <Route path="/404" element={<NotFound text="Page not found" />} />
            <Route path="/*" element={<NotFound text="Page not found" />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </NiceModal.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

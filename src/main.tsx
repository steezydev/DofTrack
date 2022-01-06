import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NiceModal from "@ebay/nice-modal-react";

import Goals from "./pages/PageGoals";
import Goal from "./pages/PageGoal";
import MainGoals from "./pages/PageMainGoals";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <NiceModal.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main-goals" element={<MainGoals />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/goal/:id" element={<Goal />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </NiceModal.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

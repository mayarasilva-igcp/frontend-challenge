import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Roadmaps from "./components/Roadmaps/Roadmaps";
import Resources from "./components/Resources/Resources";
import Solutions from "./components/Solutions/Solutions";

export const IndexRoutes = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
    </Routes>
  </Router>
);

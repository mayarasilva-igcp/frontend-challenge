import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Roadmaps } from "./pages/Roadmaps";
import { Resources } from "./pages/Resources";
import { Solutions } from "./pages/Solutions";

export const IndexRoutes = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
    </Routes>
  </Router>
);

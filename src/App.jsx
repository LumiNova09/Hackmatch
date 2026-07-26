import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App; 
import "./App.css";
// React Router Dom Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Import
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Connect from "./pages/Connect";
import Experiences from "./pages/Experiences";
import Confidential from "./pages/Confidential";
import Experience from "./pages/Experience";
// Components Import
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:id" element={<Experience />} />
          <Route path="/confidential" element={<Confidential />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

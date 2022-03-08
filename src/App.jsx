import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsListPage from "./pages/ProjectsListPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsListPage />} />
        
      </Routes>
    </div>
  );
}

export default App;

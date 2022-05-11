import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://portfoliopractice-andrew.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/about" element={<About href = {URL} />}/>  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
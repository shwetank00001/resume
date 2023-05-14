import Info from "./components/Info/Info";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer";
import Project from "./components/Projects/Project";
import Resume from "./components/Resume";
import Form from "./components/Form/Form";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Info /> 
        <About />
        <Interests/>
        <Project/>
        <Resume />
        <Form />
        <Footer />
    </div>
  );
}

export default App;

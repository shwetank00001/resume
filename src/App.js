import Info from "./components/Info/Info";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume";
import Form from "./components/Form/Form";
import TextBall from './components/TextBall/TextBall'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Info /> 
        <About />
        <Interests/>
        <Project/>
        <Skills />
        <TextBall />
        <Resume />
        <Form />
        <Footer />
    </div>
  );
}

export default App;

import Layout from "./components/Layout";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Layout>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Layout>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;

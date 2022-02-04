import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Social from "./components/Social";

function App() {
  const preloader = document.getElementById("loader");

  function preLoaderHandler() {
    preloader.style.display = "none";
  }

  setTimeout(() => {
    preLoaderHandler();
  }, 3000);

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Social />
    </div>
  );
}

export default App;

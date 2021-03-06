import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Social from "./components/Social";

function App() {
  //const preloader = document.getElementById("loader");
  //
  //function preLoaderHandler() {
  //  preloader.style.display = "none";
  //}
  //
  //setTimeout(() => {
  //  preLoaderHandler();
  //}, 3000);

  let loader;

  function loadNow(opacity) {
    if (opacity <= 0) {
      displayContent();
    } else {
      loader.style.opacity = opacity;
      window.setTimeout(function () {
        loadNow(opacity - 0.1);
      }, 150);
    }
  }

  function displayContent() {
    loader.style.display = "none";
    document.getElementById("root").style.display = "block";
  }

  document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById("loader");
    loadNow(2);
  });

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

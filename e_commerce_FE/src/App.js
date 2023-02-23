import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <div className="hidden md:block w-full bg-green-900 text-white md:flex justify-between px-[6em] py-4">
        <p>+1(210)122-6789</p>
        <p>
          Enjoys Shopping with us |{" "}
          <span className="underline pb-3">Shop now </span>
        </p>
        <p> More information</p>
      </div>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;

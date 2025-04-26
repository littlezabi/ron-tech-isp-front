import Home from "./pages/home";
import Header from "./components/Headers";
import Services from "./pages/Services/Services";
import Packages from "./pages/Packages";
import About from "./pages/About";
import ModalHub from "./components/ModalHub";

function App() {
  return (
    <div className="">
      <ModalHub />
      <Header />
      <Home />
      <Services />
      <Packages />
      <About />
    </div>
  );
}

export default App;

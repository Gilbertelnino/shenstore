import "./App.css";
import Mainnav from "./components/header/Mainnav";
// import Topnav from "./components/header/Topnav";
import Slider from "./components/slider/Slider";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Counter from "./components/counter/Counter";
// import Services from "./components/services/Services";
// import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// fontawesome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faDesktop,
  faLayerGroup,
  faChartBar,
  faVectorSquare,
  faPencilAlt,
  faMobile,
  faFillDrip,
  faBars,
  faAngleRight,
  faMedal,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faUser,
  faDesktop,
  faLayerGroup,
  faChartBar,
  faVectorSquare,
  faMobile,
  faPencilAlt,
  faFillDrip,
  faBars,
  faAngleRight,
  faMedal,
  faLayerGroup,
  faEnvelope
);

function App() {
  return (
    <div className="app">
      {/* <Topnav /> */}
      <Mainnav />
      <Slider />
      <Intro />
      <About />
      <Counter />
      {/* <Services /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

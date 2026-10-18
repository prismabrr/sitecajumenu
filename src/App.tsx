
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import SystemShowcase from "./components/SystemShowcase";
import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
import TutorialVideo from "./components/TutorialVideo";
import SystemGallery from "./components/SystemGallery";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Solutions/>
      <SystemShowcase/>
     < Benefits/>
     <TutorialVideo/>
     <SystemGallery/>
     < CallToAction/>
     <Footer/>
     

    </>
  );
}

export default App;

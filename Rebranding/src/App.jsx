import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MVV from "./components/MVV";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <MVV />
            <Services />
            <Portfolio />
            <Testimonials />
            <CTA />
          </>
        } />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
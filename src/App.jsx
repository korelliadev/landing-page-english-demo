import {
  Navbar,
  Hero,
  About,
  Testimonials,
  Pricing,
  Contact,
  Footer,
} from "./components";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;


import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CreditForm } from './components/CreditForm';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CreditForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

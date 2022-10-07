import './App.css';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Projects } from './components/Projects';
import { Techs } from './components/Techs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Projects />
      <Techs />
      <Footer />
    </>
  );
}

export default App;

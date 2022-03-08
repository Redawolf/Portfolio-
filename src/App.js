import './App.css';
import Header from './components/header/Header'
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
function App() {
  return (
    <>
        <Header />
        <section id='section-1' >
          <Section1 />
        </section>
        <section id='section-2' >
          <Section2 />
        </section>
        <section id='section-3' >
          <Section3 />
        </section>
        <section id='section-4' >
          <Section4 />
        </section>

    </>
  );
}

export default App;

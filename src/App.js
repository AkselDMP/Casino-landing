import './App.css';
import Accordion from './components/Accordion';
import Fonctionnement from './components/Fonctionnement';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Presentation2 from './components/Presentation2';

function App() {
  return (
    <div>
      <Header/>
      <Fonctionnement />
      <Presentation2 />
      <Presentation />
      <Accordion />
    </div>
  );
}

export default App;

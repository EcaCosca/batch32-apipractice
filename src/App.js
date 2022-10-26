import logo from './logo.svg';
import './App.css';
import FetchPokemon from './components/FetchPokemon';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  return (
    <div className="App">
      <AxiosPokemon />
      <FetchPokemon />

    </div>
  );
}

export default App;

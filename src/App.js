import Menu from "./components/Menu";
import data from "./data/recipes.json";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Menu recipes={data} />
    </div>
  );
}

export default App;

import {useState} from "react"
import ThemeContext from './components/ThemeContext';
import ThemeToggle from "./components/ThemeToggle";
import { Todos } from "./components/Todos";
import './App.css';

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <Todos />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

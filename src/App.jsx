import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  const {isLight}= useContext(ThemeContext)


  return (
    <>
      <div className={`main ${isLight ? 'Light' : 'Dark'}`}>
        <Navbar />
        <div className="App">
          <h1>What you want to do today?</h1>
          <div>
            <Todo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header>
      <div className="menu-container">
        <img src="https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png"></img>
        <p class="version">Version 1.0</p>
      </div>
     

      <div>
      <p>Version 1.0</p>
      </div>
        <div className="input-container">
      <p>Updated on 12 Apr</p>
        <input className="input" placeholder="🔎filter cards"></input>
      </div>

      <div className="toDoList-container">
        <p className="task-number">1</p>
        <p className="todo">To do</p>
        <button className="add-button">+</button>
      </div>

      </header>

   
  );
}

export default App;

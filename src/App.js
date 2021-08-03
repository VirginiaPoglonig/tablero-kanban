import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header>
        <div className="menu-container">
          <img src="https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png"></img>
          <p class="version">Version 1.0</p>
        </div>
      </header>


      <div>
        <p>Version 1.0</p>
      </div>
      <div className="input-container">
        <p>Updated on 12 Apr</p>
        <input className="input" placeholder="🔎filter cards"></input>
      </div>


      <div className='column-container'>
        <div className='todo-column column'>
          <div className="toDoList-container header-container">
            <div className='toDo-header'>
              <p className="task-number">1</p>
              <p className="todo">To do</p>
            </div>
            <button className="add-button">+</button>
          </div>
        </div>
        <div className='inprogress-column column'>

        </div>
        <div className='done-column column'></div>
      </div>





    </div>
  );
}

export default App;

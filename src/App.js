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
          <div className="header-container">
            <div className='toDo-header'>
              <p className="task-number">1</p>
              <p className="todo">To do</p>
            </div>
            <button className="add-button">+</button>

          </div>
          <div class="añadir_tareas">

            <input class="input_text" type="text"/>
              <div class="botones">
                <button class="boton add-button">Add</button>
                <button class="boton add-button">Cancel</button>
              </div>
                    
          </div>


          </div>
          <div className='inprogress-column column'>
            <div className="header-container">
              <div className='toDo-header'>
                <p className="task-number">1</p>
                <p className="todo">In progress</p>
              </div>
              <button className="add-button">+</button>
            </div>
          </div>
          <div className='done-column column'>
            <div className="header-container">
              <div className='toDo-header'>
                <p className="task-number">1</p>
                <p className="todo">Done</p>
              </div>
              <button className="add-button">+</button>
              <button className="clear_all add-button">Clear All</button>
            </div>
          </div>
        </div>



      </div>
    
    );

}

      export default App;

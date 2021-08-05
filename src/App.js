import './App.css';
import Columns from './components/columns';
import Header from './components/header';


function App() {
  return (
    <div className='container'>
      <Header></Header>
      <div className="input_container">
        <div className="container_version-date">
          <p>Version 1.0</p>
          <p>Updated on 12 Apr</p>
        </div>
        <input className="input" placeholder="🔎filter cards"></input>
      </div>
      <Columns></Columns>
    </div>
  )
}

export default App;

import './App.css';
import Columns from './components/columns';
import Header from './components/header';
import Search from './components/search';


function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Search></Search>
      <Columns></Columns>
    </div>
  )
}

export default App;

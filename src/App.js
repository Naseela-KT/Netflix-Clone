import "./App.css"
import Home from "./Home";
import {Routes,Route} from 'react-router-dom';
import Search from "./Components/Seach/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;

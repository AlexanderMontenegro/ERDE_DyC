import { Routes, Route} from "react-router-dom";
import "./styles/index.css";
import Landing from "./pages/LandigPage";
import Home from "./pages/Home";


function App() {
  return (

      <Routes>
         <Route path='/' element={<Landing/>}/>  
         <Route path='/home' element={<Home/>}/>
      </Routes>

  );
}

export default App;
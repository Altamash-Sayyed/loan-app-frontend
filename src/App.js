import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav';
import Form from './components/Form';
function App() {
  return (
    <BrowserRouter >
 <Nav />
    <Routes>
      < Route path="/" element={<Home />} />
      < Route path="/form" element={<Form />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

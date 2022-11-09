import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import "./style/app.scss";
import Nav from './components/Nav';
import Home from './components/Home';
import Post from './components/Post';
import EditForm from './components/EditForm';




function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Nav/>
      <Routes>
        
      <Route path="/" element={ <Home/>} />
      <Route path="/post/:id" element={ <Post/>} />
      <Route path="/editpost/:id" element={ <EditForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

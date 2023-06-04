import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import User from './Components/User';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Container>
        <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/add" element={<User/>}></Route>
        <Route path="/edit/:id" element={<User/>}></Route>
        </Routes>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

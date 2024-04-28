// App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import StatusBar from './components/StatusBar';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className="app">
      <StatusBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default App;

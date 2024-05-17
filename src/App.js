// App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import StatusBar from './components/StatusBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Custom from './components/Custom';
import WordQuiz from './components/WordQuiz';
import WrongAnswer from './components/WrongAnswer';
import WordQuizStart from './components/WordQuizStart';
import LongCode from './components/LongCode';
import BlockCode from './components/BlockCode';
import TypeLong from './components/TypeLong';
import WrongAnswerRetry from './components/WrongAnswerRetry';

const App = () => {
  return (
    <div className="app">
      <StatusBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/longcode" element={<LongCode />} />
        <Route path="/blockcode" element={<BlockCode />} />
        <Route path="/wordquiz" element={<WordQuiz />} />
        <Route path="/wordquizstart" element={<WordQuizStart />} />
        <Route path="/wronganswer" element={<WrongAnswer />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/type-long" element={<TypeLong />} />
        <Route path='/wronganswerretry' element={<WrongAnswerRetry/>}/>
      </Routes>
    </div>
  );
};

export default App;

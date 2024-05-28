// 네비게이션 구축
// App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import StatusBar from './components/StatusBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Custom from './components/Custom';
import CustomWrite from './components/CustomWrite';
import CustomDelete from './components/CustomDelete';
import WordQuiz from './components/WordQuiz';
import WrongAnswer from './components/WrongAnswer';
import WordQuizStart from './components/WordQuizStart';
import LongCode from './components/LongCode';
import BlockCode from './components/BlockCode';
import TypeLong from './components/TypeLong';
import WrongAnswerRetry from './components/WrongAnswerRetry';
import TypeBlock from './components/TypeBlock';
import LongResult from './components/LongResult';
import BlockResult from './components/BlockResult';
import { useState } from 'react';

const App = () => {
  return (
    <div className="app">
      <StatusBar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/longcode" element={<LongCode />} />
        <Route path="/blockcode" element={<BlockCode />} />
        <Route path="/wordquiz" element={<WordQuiz />} />
        <Route path="/wordquizstart/:selectedOption" element={<WordQuizStart />} />
        <Route path="/wronganswer/:selectedOption" element={<WrongAnswer />} />
        <Route path="/custom" element={<Custom />} />
        <Route path='/customwrite' element={<CustomWrite/>}/>
        <Route path='/customdelete' element={<CustomDelete/>}/>
        <Route path="/type-long/:id" element={<TypeLong />} />
        <Route path="/type-block/:id" element={<TypeBlock />} />
        <Route path="/long-result" element={<LongResult />} />
        <Route path="/block-result" element={<BlockResult />} />
        <Route path='/wronganswerretry/:selectedOption' element={<WrongAnswerRetry/>}/>
      </Routes>
    </div>
  );
};

export default App;

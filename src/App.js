import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import WorkingPage from './components/WorkingPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={WorkingPage}/>
        <Route path="/result/" component={ResultPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;

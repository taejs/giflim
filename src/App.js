import React from 'react';
import logo from './logo.svg';
import './App.css';

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

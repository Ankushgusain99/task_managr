import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Create from './Components/Create.js';
import Read from './Components/Read.js';
import Update from './Components/Update.js';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          
              <Route exact path="/" element={<Create />}></Route>
              <Route exact path="/read" element={<Read />}></Route>
              <Route exact path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

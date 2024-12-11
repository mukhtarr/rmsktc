import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Pages/Menu';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Internships from './Pages/Internships';
import Expert from './Pages/Expert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Pages/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project/*" element={<Projects />} />
            <Route path="/internship" element={<Internships />} />
            <Route path="/expert" element={<Expert />} />
          </Routes>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;

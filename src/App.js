import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage'
import Term from './components/term/term'
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/term/:name" exact component={Term} />
    </Router>
  );
}

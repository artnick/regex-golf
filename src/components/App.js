import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Editor from './Editor';
import Task from './Task';

const App = () => (
  <Router>
    <div className='app'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/task/about'>About</Link></li>
      </ul>

      <hr/>

      <Route exact path='/' component={Editor}/>
      <Route path='/task/:id' component={Task}/>
    </div>
  </Router>
);

export default App;

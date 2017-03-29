import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Editor from './Editor';
import TaskPage from '../containers/TaskPage';

const App = () => (
  <Router>
    <div className='app'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/task/58dba646736df100111b25d8'>About</Link></li>
      </ul>

      <hr/>

      <Route exact path='/' component={Editor}/>
      <Route path='/task/:id' component={TaskPage}/>
    </div>
  </Router>
);

export default App;

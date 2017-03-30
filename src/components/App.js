import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Editor from './Editor';
import TaskPage from '../containers/TaskPage';

const App = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={Editor}/>
      <Route path='/task/:id' component={TaskPage}/>
    </div>
  </Router>
);

export default App;

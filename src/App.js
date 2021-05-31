import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import dashboard from './component/dashboard/dashboard'
import ProjectDetail from './component/projects/ProjectDetail'

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">

        <Navbar/>
        <Switch>
          <Route exact path='/' component={dashboard}/>
          <Route path='/project/:id' component={ProjectDetail}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

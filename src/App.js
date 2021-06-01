import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import dashboard from './component/dashboard/dashboard'
import ProjectDetail from './component/projects/ProjectDetail'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/Singup'
import CreateProject from './component/projects/CreateProject'


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">

        <Navbar/>
        <Switch>
          <Route exact path='/' component={dashboard}/>
          <Route path='/project/:id' component={ProjectDetail}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

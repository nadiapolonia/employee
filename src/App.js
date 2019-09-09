import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import EmployeePage from './pages/EmployeePage'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/add" component={AddPage}></Route>
            <Route exact path="/:id" component={EmployeePage}></Route>
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default App

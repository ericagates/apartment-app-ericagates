import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import mockApts from './mockApartments.js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        apartments: mockApts
    }

}
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Switch>
          <Route exact path='/' 
            render = { (prop) =>
              <Home 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
              />
            } 
          />
          <Route exact path='/index' 
            render = { (prop) =>
              <ApartmentIndex 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
                apartments={ this.state.apartments }
              />
            } 
          />
          <Route exact path='/show/:id' 
            render = { (prop) =>
              <ApartmentShow
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
              />
            }
          />
          <Route exact path='/create' 
            render = { (prop) =>
              <ApartmentNew 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
              />
            }  
          />
          <Route exact path='/edit' 
            render = { (prop) =>
              <ApartmentEdit 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
              />
            } 
          />
          <Route component={ NotFound }/>
        </Switch>


      </Router>
    )
  }
}

export default App

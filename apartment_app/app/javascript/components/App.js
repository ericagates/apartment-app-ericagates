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
//import mockApts from './mockApartments.js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        apartments: []
    }

}

componentDidMount(){
  fetch("/apartments").then(response => {
      if(response.status === 200){
          return(response.json())
      }
  }).then(apartmentsArray => {
      this.setState({ apartments: apartmentsArray })
  }).catch(errors => {
      console.log("index errors", errors)
  })
}

createNewApartment = (newApartment) => {
  
      console.log("create new apartment", newApartment)

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
            render = { (props) =>
              <Home 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
              />
            } 
          />
          <Route exact path='/index' 
            render = { (props) =>
              <ApartmentIndex 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
                apartments={ this.state.apartments }
              />
            } 
          />
          <Route exact path='/show/:id' 
            render = { (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(value => value.id === parseInt(id))
              return (
              <ApartmentShow
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route}
                apartment  = {apartment} 
              />)
            }}
          />
          <Route exact path='/create' 
            render = { (props) =>
              <ApartmentNew 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
                createNewApartment = {this.createNewApartment}
              />
            }  
          />
          <Route exact path='/edit/:id' 
            render = { (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(value => value.id === parseInt(id))
              return (
              <ApartmentEdit 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
                apartment  = {apartment} 
              />)
            }} 
          />
          <Route
          render = { (props) =>
            <NotFound 
              logged_in = {logged_in}
              sign_in_route = {sign_in_route}
              sign_out_route = {sign_out_route} 
            />
          }
          />
        </Switch>


      </Router>
    )
  }
}

export default App

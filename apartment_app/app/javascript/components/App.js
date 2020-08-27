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
  
  return fetch("/apartments", {
    body: JSON.stringify(newApartment),
    headers: { "Content-Type": "application/json" },
    method: "POST"
    }).then(response => {
    if(response.status === 200){
        this.componentDidMount()
    } else {
        alert("Please check your form")
    }
    return response
    }).catch(errors => {
    console.log("create errors", errors)
})
}


  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
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
                title = "All Apartments"
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
                current_user = {current_user}
              />
            }  
          />
          <Route exact path='/myapartments' 
            render = { (props) => {
              let id = current_user.id
              let myApartments = this.state.apartments.filter(value => value.user_id === id)
              return(   
              <>         
                <ApartmentIndex 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
                apartments={ myApartments }
                title = "My Listed Apartments"
              />
              </>
              )} }
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
                current_user = {current_user}
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

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
import MyApartment from './pages/MyApartment'
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

editApartment = (editApartment, id) => {
  return fetch(`/apartments/${id}`, {
      // converting an object to a string
      body: JSON.stringify(editApartment),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {"Content-Type": "application/json"},
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
  }).then(response => {
      // if the response is good  - reload the cats
      if(response.status === 200){ this.componentDidMount()}
      return response
  }).catch(errors => {
      console.log("edit errors", errors)
  })
}

deleteApartment = (id) => {
  console.log("deletedApartmentID: ", id)
  return fetch(`/apartments/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => {
    if(response.status === 200){
      this.componentDidMount()
    }else {
      alert("Not successfully deleted")
  }
  return response
    
  })
  .catch(errors => {
    console.log("delete errors:", errors)
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
          { logged_in &&
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
        }
          { logged_in &&
            <Route exact path='/myapartments' 
            render = { (props) => {
              let id = current_user.id
              let myApartments = this.state.apartments.filter(value => value.user_id === id)
              return(   
              <>         
                <MyApartment 
                logged_in = {logged_in}
                sign_in_route = {sign_in_route}
                sign_out_route = {sign_out_route} 
                apartments={ myApartments }
                deleteApartment = {this.deleteApartment}
              />
              </>
              )} }
            />
          }
          { logged_in &&
            <Route exact path='/edit/:id' 
              render = { (props) => {
                let userid = current_user.id
                console.log("userid: ", userid)
                let myApartments = this.state.apartments.filter(value => value.user_id === userid)
                console.log("myApartments: ", myApartments)
                let id = props.match.params.id
                console.log("apartment id: ", id)
                let apartment = myApartments.find(value => value.id === parseInt(id))
                console.log("apartment: ", apartment)
                return (
                <ApartmentEdit 
                  logged_in = {logged_in}
                  sign_in_route = {sign_in_route}
                  sign_out_route = {sign_out_route} 
                  apartment  = {apartment}
                  editApartment = {this.editApartment}
                />)
              }} 
            />
          }
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

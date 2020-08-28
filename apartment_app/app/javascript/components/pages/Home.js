import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Jumbotron, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <Header
          logged_in = { logged_in } 
          sign_in_route = { sign_in_route }
          sign_out_route = { sign_out_route }
        />

        <Jumbotron>
          <div className = "myBackground p-4" >
            <h1 className="display-3">Welcome!</h1>
            <hr className="my-2" />
            <p className="lead">Apartment app is the best place to list your apartments and find your next dream apartment!</p>
            <p className="lead">
            <NavLink to= {`/index`}>
              <Button color="primary">View All Listings</Button>
            </NavLink>
            </p>
        </div>
      </Jumbotron>


        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
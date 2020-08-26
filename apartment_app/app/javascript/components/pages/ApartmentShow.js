import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
class ApartmentShow extends React.Component {
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
        <h2>Apartment Show Page</h2>
        <Footer />
      </React.Fragment>
    )
  }
}


export default ApartmentShow
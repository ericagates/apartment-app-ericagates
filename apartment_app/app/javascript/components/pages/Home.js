import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Card, CardTitle, CardText, Col } from 'reactstrap'

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
        <Container>
        <h2>Welcome!</h2>
        <h4>This will be your new favorite apartment hunting app! </h4>

        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
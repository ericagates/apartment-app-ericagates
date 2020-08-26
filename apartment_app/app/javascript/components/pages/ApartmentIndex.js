import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardTitle, Col } from 'reactstrap'

class ApartmentIndex extends React.Component {
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
<h2>All Apartments</h2>
<br />
  <Col sm="6">
    { this.props.apartments.map((apartment, index) => {
      return (
        <Card body key={ index }>
          <CardTitle>
            <h4>{ apartment.street }</h4>
          </CardTitle>
        </Card>
      )
    })}
  </Col>
        <Footer />
      </React.Fragment>
    )
  }
}


export default ApartmentIndex
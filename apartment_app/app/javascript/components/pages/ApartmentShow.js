import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Card, CardTitle, CardText, Col } from 'reactstrap'

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
        <div className = "aptNew">
        <Container className = "p-3">
        <Col sm="6" id="show-body">
          <Card body >
       
            <CardTitle><strong>{ this.props.apartment.bedrooms } bd / { this.props.apartment.bathrooms } ba Apartment in { this.props.apartment.city }</strong></CardTitle>
            <CardText> 
            Street: { this.props.apartment.street }
            <br/>
            City: { this.props.apartment.city }
            <br/>
            State: { this.props.apartment.state }
            <br/>
            Manager: { this.props.apartment.manager }
            <br/>
            Email: { this.props.apartment.email }
            <br/>
            Price: { this.props.apartment.price }
            <br/>
            Bedrooms: { this.props.apartment.bedrooms }
            <br/>
            Bathrooms: { this.props.apartment.bathrooms }
            <br/>
            Allows pets: { this.props.apartment.pets}
            </CardText>
          </Card>
        </Col>
        </Container>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}


export default ApartmentShow
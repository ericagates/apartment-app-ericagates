import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
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
        <Container>
        <h2>All Apartments</h2>
        <br />
        <Col sm="6">
          { this.props.apartments.map((apartment, index) => {
            return (
              <Card body key={ index }>
                <CardTitle>
                  <h6>{ apartment.bedrooms } bd / { apartment.bathrooms } ba apartment in {apartment.city}, {apartment.state}
                  <br/> ${ apartment.price } </h6>
                  <NavLink to= {`/show/${apartment.id}`} >
                  See Details
                  </NavLink>
                </CardTitle>
              </Card>
            )
          })}
        </Col>
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}


export default ApartmentIndex
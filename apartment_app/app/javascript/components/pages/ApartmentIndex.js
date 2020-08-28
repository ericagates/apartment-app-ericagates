import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Card, CardTitle, Col, Row} from 'reactstrap'
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
        <div className = "allApts py-3">

        <h3 className = "m-3">All Apartments</h3>
        <Container >
        
        <Row id="cards" xs="1" sm="2" md="3"  className =  'my-auto'>
            { this.props.apartments.map((apartment, index) => {
              return (
                <Col  className = "my-2" key={ index }>
                <Card body >
                  <CardTitle>
                    <h6>{ apartment.bedrooms } bd / { apartment.bathrooms } ba apartment in {apartment.city}, {apartment.state}
                    <br/> ${ apartment.price } </h6>
                    <NavLink to= {`/show/${apartment.id}`} >
                    See Details
                    </NavLink>
                  </CardTitle>
                </Card>
              </Col>
              )
            })}

        </Row>
        </Container>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}


export default ApartmentIndex
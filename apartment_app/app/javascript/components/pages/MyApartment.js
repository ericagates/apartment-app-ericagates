import React from "react"
import PropTypes from "prop-types"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Card, CardTitle, Col, Row, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class MyApartment extends React.Component {
  
  handleClick = (id) => (e) => {

    this.props.deleteApartment(id);
  }
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
        <div className = "myApts py-3">

        <h3 className = "myBackground m-3 p-3">My Apartments</h3>
        <Container>
        
        <Row id="cards" xs="1" sm="2" md="3"  className =  'my-auto'>
            { this.props.apartments.map((apartment, index) => {
              return (
                <Col  className = "my-2" key={ index }>
                <Card body >
                  <CardTitle>
                    <NavLink to= {`/show/${apartment.id}`} >
                    <h6>{ apartment.bedrooms } bd / { apartment.bathrooms } ba apartment in {apartment.city}, {apartment.state}
                    <br/> ${ apartment.price } </h6>
                    
                    </NavLink>
                    <br/>
                    <NavLink to= {`/edit/${apartment.id}`} >
                      <Button className = "m-2">
                        Edit
                      </Button>
                    </NavLink>
                    
                    <Button className = "m-2" onClick={this.handleClick(apartment.id)}>
                    Delete
                    </Button>
                  </CardTitle>
                </Card>
              </Col>
              )
            })}
        </Row>
        <NavLink to= {`/create`} >
          <Button className = "m-2">
            Add An Apartment Listing
          </Button>
        </NavLink>
        </Container>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}


export default MyApartment
import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { Container, Card, CardTitle, CardText, Col } from 'reactstrap'

import { Redirect } from 'react-router-dom'

class ApartmentNew extends React.Component {
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
          <h2>New Apartment Page</h2>

          </Container>
          <Footer />
        </React.Fragment>
      )
    }
  }
  
  export default ApartmentNew
import React from "react"
import PropTypes from "prop-types"
import { Container, Card, CardTitle, CardText, Col } from 'reactstrap'


class Footer extends React.Component {
  render() {

    return (
      <React.Fragment>
        <Container className = 'text-center m-2 p-2'>
        <h5>Footer</h5>
        </Container>

      </React.Fragment>
    )
  }
}

export default Footer
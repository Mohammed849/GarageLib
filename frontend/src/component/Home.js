import React, { Component } from 'react';
import { Jumbotron, Form, Col, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Bienvenue sur GarageLib</h1>
        <p>Réservez un rendez-vous avec un professionnel de l'automobile</p>
        <Form>
          <Form.Row>
            <Col xs={7}>
              <Form.Control placeholder='Réparation, révision...' />
            </Col>
            <Col>
              <Form.Control placeholder='Ville' />
            </Col>
            <Col>
              <Button variant='outline-primary'>Chercher</Button>{' '}
            </Col>
          </Form.Row>
        </Form>
      </Jumbotron>
    );
  }
}

import React, { Component } from 'react'
// import logo from '../logo.svg';
import '../styles/main.css'
import Cards from './Cards'
import NavBar from './NavBar'
import img1 from '../images/goku.JPG'
import gokufront from '../images/gokufront.JPG'
import gokuyellow from '../images/gokuyellow.JPG'
import gokuyellow2 from '../images/gokuyellow2.JPG'
import nirvana from '../images/nirvana.JPG'
import logan from '../images/logan.JPG'
import reyleon from '../images/reyleon.JPG'
import reyleonfront from '../images/reyleonfront.JPG'
import names from '../images/names.JPG'
import names2 from '../images/names2.JPG'
import superheroes from '../images/superheroes.JPG'
import infantil from '../images/infantil.JPG'
import superheroes2 from '../images/superheroes2.JPG'
import superheroes3 from '../images/superheroes3.JPG'
import infantil2 from '../images/infantil 2.JPG'
import superheroes4 from '../images/superheroes4.JPG'
import superheroes6 from '../images/superheroes6.JPG'
import superheroes7 from '../images/superheroes7.JPG'
import JesusWhite from '../images/jesuswhite.JPG'
import Jesus from '../images/jesus.JPG'

import { Footer } from './Footer'
import { Row, Container, Col } from 'react-bootstrap'


export default class Main extends Component {
  render() {

    return (
      <div className="App">
        <div className='separator'>by Andres G.O!</div>
        <NavBar />

        <header className="App-header">
          <h1 className='headerTitle'>Esto Hay Que Vivirlo! ...</h1>
          <h2 className='headerSubtitle'>Yo Have To Live IT! ...</h2>
        </header>
        <div className='cards'>

          <Container fluid={true}>
            <Row className='row1'><Col className='col1'> <h2> Busos / Hoddies </h2> </Col></Row>
            <Row className='row1'>
              <Col> <Cards image={img1} /></Col>
              <Col> <Cards image={gokufront} /></Col>
              <Col> <Cards image={gokuyellow} /></Col>
              <Col> <Cards image={gokuyellow2} /></Col>
            </Row>
            <Row><Col className='col1'> <h2>Elige tu Color / Pick your Colours ...</h2><h2> o tu diseño / ... or your design</h2></Col></Row>
            <Row className='row2'>
              <Col> <Cards image={nirvana} /></Col>
              <Col> <Cards image={logan} /></Col>
              <Col> <Cards image={reyleonfront} /></Col>
              <Col> <Cards image={reyleon} /></Col>
            </Row>
            <Row><Col className='col1'> <h2> Camisetas / T-shirts  </h2> <h2> Personalizadas / Personalised  </h2> </Col></Row>
            <Row className='row3'>
              <Col> <Cards image={superheroes6} /></Col>
              <Col> <Cards image={superheroes7} /></Col>
              <Col> <Cards image={names} /></Col>
              <Col> <Cards image={names2} /></Col>
            </Row>
            <Row><Col className='col1'> <h2> Modelos Infantiles / Children's styles  </h2> <h2> O cualquier estilo que prefieras / or any design of your choice  </h2></Col></Row>
            <Row className='row4'>
              <Col> <Cards image={superheroes} /></Col>
              <Col> <Cards image={infantil} /></Col>
              <Col> <Cards image={superheroes3} /></Col>

              <Col> <Cards image={superheroes2} /></Col>
            </Row>
            <Row className='row5'>
              <Col> <Cards image={infantil2} /></Col>
              <Col> <Cards image={superheroes4} /></Col>
              <Col> <Cards image={JesusWhite} /></Col>
              <Col> <Cards image={Jesus} /></Col>
            </Row>
          </Container>

        </div>
        <div className='footer'><Footer /></div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import { Card } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

export default class Cards extends Component {
  state = {
    main: false
  }

  handleClick = () => {
    this.setState(
      this.main = true
    )
  }
  render() {
    return (
      <div>
        <Card style={{ width: '20rem' }}>
          <Card.Img className='images' variant="top" src={this.props.image} />
          {/* <Card.Body>
            <Card.Title >{this.props.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          </ListGroup> */}

        </Card>
      </div>
    )
  }
}

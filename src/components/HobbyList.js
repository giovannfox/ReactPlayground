/**
 * @author Giovann Fox
 */


import React from 'react';
import { Container } from 'react-bootstrap';

const HobbyList = ({hobbies}) => {
  return (
      <Container>
          <b>Hobbies I am interested in:</b>
          {hobbies.map((item) => {
              return (
                  <Container key = {item.key}>
                      <p>{item.name}</p>
                  </Container>
              )
          })}
      </Container>
  )
}

export default HobbyList;
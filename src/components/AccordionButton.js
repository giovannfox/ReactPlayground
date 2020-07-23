import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function AccordionButton({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'red' : 'blue' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
  function Example() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <AccordionButton
         eventKey="0">Click here!</AccordionButton
        >
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello there:)</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <AccordionButton
         eventKey="1">Click here!</AccordionButton
        >
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>General Kenobi!</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  
  render(<Example />);


  export default Accordion;
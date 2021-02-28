import '../styles/common.css'
import '../styles/filter_section.css'
import React from 'react';
import Dropd from "react-dropd";
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const FilterSection = () => {
  return (
    <React.Fragment>
      <Form style={{ margin: '8px' }}>
        <Form.Row>
          <Col md='5'>
            <InputGroup style={{ border: '1px solid black' }}>
              <InputGroup.Prepend>
                <InputGroup.Text style={{ backgroundColor: 'white', border: '0px' }}>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                className='remove-highlight'
                style={{ backgroundColor: 'white', border: '0px' }}
                type="text"
                placeholder="Search for process, channel etc"
              />
            </InputGroup>
          </Col>
          <Col md={{ span: 3, offset: 4 }}>
            <Button className='demographic-button' variant="outline-primary">Demographic Map</Button>
          </Col>
        </Form.Row>
        <Form.Row>
          <Dropd
            closeOnBlur={false}
            placeholder="Experience"
          />
          <Dropd
            closeOnBlur={false}
            placeholder="Industry"
          />
          <Dropd
            closeOnBlur={false}
            placeholder="Gender"
          />
          <Dropd
            closeOnBlur={false}
            placeholder="Education"
          />
          <Dropd
            closeOnBlur={false}
            placeholder="Language"
          />
          <Col md={{ offset: 3 }}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agent having laptop/desktop" />
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
}
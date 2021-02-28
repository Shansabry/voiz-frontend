import { faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Badge, Row } from 'react-bootstrap';

const getStatus = (value) => {
  switch (value) {
    case 1:
      return 'Available';
    case 2:
      return 'On a gig';
    case 3:
      return 'Inactive';
    default:
      return '';
  }
}

export const Card = ({ data, userName }) => {
  return (<React.Fragment>
    <div style={{ backgroundColor: 'white', margin: '10px', width: '430px' }}>
      <Container style={{ padding: '20px' }}>
        <Row>
          <Col xs={3}>
            <img src={data.image} alt='profile' style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
          </Col>
          <Col xs={9}>
            <Row>
              <Col>
                <Row>
                  <Col sm={8}>
                    <Row>
                      <div style={{ fontWeight: '600', color: '#333333' }}>
                        {data.name}
                      </div>
                      <div>
                        {
                          data.isBadged ?
                            <Badge pill variant="primary" style={{ fontSize: '9px', margin: '4px' }}>CX</Badge> : ''
                        }
                      </div>
                    </Row>
                  </Col>
                  <Col sm={{ span: 1, offset: 1 }}>
                    <Badge pill style={{ fontSize: '9px', backgroundColor: '#F5F5F5', color: '#808080' }}>{getStatus(data.status)}</Badge>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>
                {`${data.experience} year exp`}
              </div>
            </Row>
            <Row>
              <div style={{ fontSize: '12px' }}>
                {data.desc}
              </div>
            </Row>
            <Row>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>
                {data.isGraduated ? 'Graduated' : 'Not Graduated'}
              </div>
            </Row>
            <Row>
              <div style={{ fontSize: '11px' }}>
                {`${data.age} , ${data.gender === 1 ? 'Male' : 'Female'}`}
              </div>
            </Row>
            <Row>
              <FontAwesomeIcon title={data.contacts.phone} icon={faHeadset} style={{ margin: '2px 5px 0px 0px', cursor: 'pointer' }} />
              <FontAwesomeIcon title={data.contacts.email} icon={faEnvelope} style={{ margin: '2px 5px 0px 0px', cursor: 'pointer' }} />
              <Col sm={{ span: 2, offset: 7 }}>
                <Button size="sm" variant="outline-primary" disabled={!userName}>
                  INVITE
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  )
};
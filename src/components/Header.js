import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Login } from './Login';
const Header = ({ userName, setUserName }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => setUserName();
  return (
    <>
      <Navbar>
        <Nav className='container-fluid'>
          <Nav.Item style={{ padding: '20px 80px' }}>
            <Navbar.Brand href='#home'>
              <div style={{ display: 'block' }}>
                <h4
                  style={{
                    float: 'left',
                    color: 'white',
                    backgroundColor: 'black',
                    padding: '6px 5px',
                  }}
                >
                  CX
                </h4>
                <h5 style={{ float: 'left', padding: '8px 5px' }}>
                  Marketplace
                </h5>
              </div>
            </Navbar.Brand>
          </Nav.Item>
          {userName ? (
            <div>
              <h5 style={{ float: 'left', paddingRight: '16px', paddingTop: '8px' }}>{`Hello, ${userName}`}</h5>
              <Button
                variant='outline-dark'
                onClick={handleLogout}
                style={{
                  padding: '5px 40px',
                  borderRadius: '0px',
                  fontWeight: '600',
                  border: '2px solid black',
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
              <Nav.Item className='ml-auto' style={{ padding: '20px 80px' }}>
                <Button
                  variant='outline-dark'
                  onClick={handleShow}
                  style={{
                    padding: '5px 40px',
                    borderRadius: '0px',
                    fontWeight: '600',
                    border: '2px solid black',
                  }}
                >
                  Login
              </Button>
              </Nav.Item>
            )}
        </Nav>
      </Navbar>
      <Login show={show} handleClose={handleClose} setUserName={setUserName} />
    </>
  );
};
export default Header;

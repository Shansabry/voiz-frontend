import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import axios from 'axios';

export const Login = ({ show, handleClose, setUserName }) => {
  const { register, handleSubmit, errors, setError } = useForm();

  const handleLoginClick = async (data) => {
    await axios.post('http://localhost:8080/login', data)
      .catch((e) => {
        const errors = e.response.data;
        if (errors) {
          setError('email', {
            type: 'server',
            message: 'Invalid Credentials'
          });
        }
      }).then((response) => {
        const data = response?.data;
        if (data) {
          setUserName(data.name);
          handleClose();
        }
      });
  }
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <span>Email</span>
          <InputGroup style={{ border: '1px solid black' }}>
            <Form.Control
              className='remove-highlight'
              style={{ backgroundColor: 'white', border: '0px' }}
              type="email"
              name="email"
              ref={register({
                required: 'Email is required',
              })}
              placeholder="Enter email"
            />
          </InputGroup>
          <div style={{ color: 'red', fontSize: '10px' }}>{errors.email ? errors.email.message : ''}</div>
          <span>Password</span>
          <InputGroup style={{ border: '1px solid black' }}>
            <Form.Control
              className='remove-highlight'
              style={{ backgroundColor: 'white', border: '0px' }}
              type="password"
              name="password"
              ref={register({
                required: 'Password is required',
              })}
              placeholder="Enter password"
            />
          </InputGroup>
          <div style={{ color: 'red', fontSize: '10px' }}>{errors.password ? errors.password.message : ''}</div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outline-danger'
          onClick={handleClose}
          style={{
            padding: '5px 30px',
            borderRadius: '0px',
            fontWeight: '600',
            border: '2px solid red',
          }}
        >
          Close
          </Button>
        <Button
          variant='outline-dark'
          onClick={handleSubmit(handleLoginClick)}
          style={{
            padding: '5px 40px',
            borderRadius: '0px',
            fontWeight: '600',
            border: '2px solid black',
          }}
        >
          Login
          </Button>
      </Modal.Footer>
    </Modal>
  );
}
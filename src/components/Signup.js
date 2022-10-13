import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup() {
  return (
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>LOGIN</h2>
            </Card.Body>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                </Form.Group>
                <Button ClassName="w-100"type="submit">Entrar</Button>
            </Form>
        </Card>
        <div className='w-100 bg-light'>
            Registar
        </div>
    </div>
  )
}

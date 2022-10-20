import React, { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const emailRef=useRef()
    const passwordRef=useRef()

    const { login } = useAuth()
    const[error,setError] =useState('')
    const[loading,setLoading] =useState(false)
    const navigate = useNavigate()

async function handleSubmit(e) {
    e.preventDefault()
    try{
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate("/")
    }catch{
        setError('Failed to Login')
    }
    setLoading(false)
}


  return (
    <div>
        <Card className='bg-light'>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mx-3 mt-2' id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group className='mx-3 mt-2' id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button disabled ={loading} className="w-50 my-3"type="submit">Entrar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center'>
            Não tem conta? Registar <Link to='/signup'>Signup</Link>
        </div>
    </div>
  )
}

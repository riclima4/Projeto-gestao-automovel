import React, { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const confPasswordRef=useRef()
    const { signup } = useAuth()
    const[error,setError] =useState('')
    const[loading,setLoading] =useState(false)
    const navigate = useNavigate()

async function handleSubmit(e) {
    e.preventDefault()
    if(passwordRef.current.value !== confPasswordRef.current.value){
        console.log(passwordRef.current.value.lenght)
        return setError('Password dont match')

    }
    
    if(passwordRef.current.value.lenght < 6){
        return setError('Password needs to be at least 6 char')
    }
    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate("/")
    }catch{
        setError('Failed to create account')
    }
    setLoading(false)
}


  return (
    <div>
        <Card className='bg-light'>
            <Card.Body>
                <h2 className='text-center mb-4'>Registar</h2>
                
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
                    <Form.Group className='mx-3 mt-2' id="confPassword">
                        <Form.Label>Confirma Password</Form.Label>
                        <Form.Control type="password" ref={confPasswordRef} required></Form.Control>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button disabled ={loading} className="w-50 my-3"type="submit">Registar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center'>
            Já tem conta? <Link to='/login'>Login</Link>
        </div>
    </div>
  )
}

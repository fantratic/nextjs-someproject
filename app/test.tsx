import React from 'react'

interface Props {
    name: string;
    id: string;
    email: string;
}

export default function Test({name, id, email}: Props) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>Your ID is: {id}</p>
      <p>Your email is: {email}</p>
    </div>
  )
}
import React from 'react'

type Greet = {
  name?: string
}

export default function Greet({ name }: Greet) {
  if (name) return <h1>Hello {name}</h1>;

  return <button>Login</button>;
}

import * as React from 'react'

export default function Exercicio01() {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState('')

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
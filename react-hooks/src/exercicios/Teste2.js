import * as React from 'react'

export default function Teste2() {

  const [caption, setCaption] = React.useState('Clique aqui')

  const handleButtonClick = event => setCaption('Botão clicado') 

  return (
    <button onClick={handleButtonClick}>{caption}</button>
  )
}
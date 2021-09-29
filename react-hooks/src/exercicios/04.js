// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'

function Board() {
  // 🐨 squares is the state for this component. Add useState for squares
  // const squares = Array(9).fill(null)
  const [squares, setSquares] = React.useState(
    // JSON.parse() converte de volta a string em vetor
    // Usando uma função para gerar um lazy initializer
    () => getStorage() || Array(9).fill(null)
  )

  function getStorage() {
    console.count('getStorage()')
    return JSON.parse(window.localStorage.getItem('jogo-velha'))
  }

  /*
    ESTADO DERIVADO: é um estado secundário que pode ser
     deduzido (calculado) a partir de uma variável de estado.
     Por ser calculado, pode ser uma variável comum (não
     precisa ser criada com useState())
  */

  // 🐨 We'll need the following bits of derived state:
  // - nextValue ('X' or 'O')
  // - winner ('X', 'O', or null)
  // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
  // 💰 I've written the calculations for you! So you can use my utilities
  // below to create these 
  
  let nextValue = calculateNextValue(squares)
  let winner = calculateWinner(squares)
  let status = calculateStatus(winner, squares, nextValue)

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `4`.
  function selectSquare(square) {
    // 🐨 first, if there's already winner or there's already a value at the
    // given square index (like someone clicked a square that's already been
    // clicked), then return early so we don't make any state changes

    // Se já existe vencedor ou se o quadrado já tem valor, saímos
    // da função sem fazer nada
    /// if(winner !== '' || squares[square] !== null) return
    if(winner || squares[square]) return

    //
    // 🦉 It's typically a bad idea to mutate or directly change state in React.
    // Doing so can lead to subtle bugs that can easily slip into production.
    //
    // 🐨 make a copy of the squares array
    // 💰 `[...squares]` will do it!)
    //
    // 🐨 set the value of the square that was selected
    // 💰 `squaresCopy[square] = nextValue`
    //
    // 🐨 set the squares to your copy
    let squaresTemp = [...squares]  // Copiou o vetor de estado
    squaresTemp[square] = nextValue
    setSquares(squaresTemp)

  }

  function restart() {
    // 🐨 reset the squares
    // 💰 `Array(9).fill(null)` will do it!
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  React.useEffect(() => {
    // Armazenar o estado do jogo no cache do navegador
    // Como setItem() só aceita strings, usamos JSON.stringify()
    // para converter o vetor em string.
    window.localStorage.setItem('jogo-velha', JSON.stringify(squares))
  }, [squares])

  return (
    <div>
      {/* 🐨 put the status in the div below */}
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div>
        squares: {JSON.stringify(squares)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  /*return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`*/

  if(winner) return `Winner: ${winner}`
  else if(squares.every(Boolean)) return `Scratch: Cat's game`
  else return `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default function Exercicio04() {
  return <Game />
}

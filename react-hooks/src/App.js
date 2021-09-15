import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Teste1 from './exercicios/Teste1'
import Teste2 from './exercicios/Teste2'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'

import './App.css';

function App() {
  return (
    <>
      <h1>React Hooks</h1>
        <blockquote>
          <em>Hooks</em> são funções especiais do React que podem ser usadas dentro de componentes funcionais para armazenar dados ou para realizar ações atreladas ao ciclo de vida do componente (efeitos colaterais). Essas funções incluem <code>useState</code>, <code>useEffect</code> e <code>useRef</code>.
        </blockquote>

        <BrowserRouter>

          <ul>
            <li>
              <Link to="teste1">Teste 1</Link>
            </li>
            <li>
              <Link to="teste2">Teste 2</Link>
            </li>
            <li>
              <Link to="ex01">Exercício 01</Link>
            </li>
            <li>
              <Link to="ex02">Exercício 02</Link>
            </li>
          </ul>

          <div style={{ border: '1px solid blue', padding: '20px'}}>
            <Switch>
              <Route path="/teste1">
                <Teste1 />
              </Route>
              <Route path="/teste2">
                <Teste2 />
              </Route>
              <Route path="/ex01">
                <Exercicio01 />
              </Route>
              <Route path="/ex02">
                <Exercicio02 />
              </Route>
            </Switch>
          </div>

        </BrowserRouter>
    </>

    
  );
}

export default App;

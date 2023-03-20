import './App.css';
import LivroDados from './LivroDados';
import LivroLista from './LivroLista';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <>
          <header>
              <h1>Catalogo de Livro</h1>
              <nav className='menu nav navbar-dark bg-dark align-content-center'>           
                  <Link className="nav-link link-light" to="/LivroLista">Home</Link> | {" "}
                  <Link className="nav-link link-light" to="/LivroDados">Catalogo</Link> | {" "}
              </nav>
          </header>
          <main className='conteudo-principal'>
              <Routes>
                  <Route path="/" element={<LivroLista />} />
                  <Route path='LivroDados' element={<LivroDados />} />
              </Routes>
          </main>
      </>
  );
}


export default App;

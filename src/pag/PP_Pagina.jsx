import movies from '../add/MOVIES_DATA.json';
import MovC from '../add/MovC';

function PP_Pagina() {
  return (
    <>
      <h1 className='Tit'>Lista de Peliculas | Gabriel Acosta</h1>
      <ul className="movie-list">
        {movies.map((movie) => {
          return (
            <li className="MovC">
              <MovC key={movie.id} {...movie} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PP_Pagina;
import './MovC.css';

function Color({ metascore }) {
    if (metascore >= 0 && metascore <= 49) {
        return <e className='rojo'>{metascore}</e>;
    } else if (metascore >= 50 && metascore <= 59) {
        return <e className='amarillo'>{metascore}</e>;
    } else if (metascore >= 60 && metascore <= 100) {
        return <e className='verde'>{metascore}</e>;
    }
}

function MovC({
  poster,
  title,
  releaseDate,
  duration,
  maturity,
  genres,
  director,
  mainActors,
  plot,
  metascore,
  rating,
}) {
  return (
    <div>
        <div className="title">
            <div className="row">
                <div className="col1">
                    <img  src={poster} />
                </div>
                <div className="col2">
                    <h2>{title}</h2>
                    <h5>Fecha de lanzamiento: {releaseDate}</h5>
                    <h5>Hora: {duration} | Madurez: {maturity}</h5>
                    <h5>::: {genres.join(' - ')}</h5>
                    <h4>★{rating} Metascore: <Color metascore={metascore} /></h4>
                    <p>Director: {director}</p> 
                    <p>Actores: <a href=''>{mainActors}</a></p>
                    <p className='plott'>{plot}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MovC;
import data from './MovieData.json';
import { useState } from 'react';

const mds = data.MovieData;

function MovieList1() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        MovieId: 6,
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };
  return (
    <>
      <div>
        <h4>The Collection</h4>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="align">
        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieList1;

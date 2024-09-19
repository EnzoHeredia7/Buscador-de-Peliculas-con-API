document.getElementById('searchButton').addEventListener('click', searchMovies)
let api_key = 'b1fb526514f37f7c28d7e5ad0cb434f2'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'http://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value
    resultContainer.innerHTML = 'Cargando...'

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then (response => displayMovie(response.results))

}


function displayMovie(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML= '<p> No se encontro resultado'
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue:' + movie.release_data
    
        let overview = document.createElement('p')
        overview.textContent = movie.overview
    
        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath


        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    });
}
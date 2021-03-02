
const movieList = [
    {
        "Title": "Django Unchained",
        "Year": "2012",
        "Rated": "R",
        "Genre": ["Drama", "Western"],
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": ["Jamie Foxx", " Christoph Waltz", " Leonardo DiCaprio", " Kerry Washington"]
    },
    {
        "Title": "Brazil",
        "Year": "1985",
        "Rated": "R",
        "Genre": ["Drama", "Sci-Fi"],
        "Director": "Terry Gilliam",
        "Writer": "Terry Gilliam",
        "Actors": ["Jonathan Pryce", " Robert De Niro", " Katherine Helmond", " Ian Holm"]
    },
    {
        "Title": "American History X",
        "Year": "1998",
        "Rated": "R",
        "Genre": ["Drama"],
        "Director": "Tony Kaye",
        "Writer": "David McKenna",
        "Actors": ["Edward Norton", " Edward Furlong", " Beverly D'Angelo", " Jennifer Lien"]
    },
    {
        "Title": "Fight Club",
        "Year": "1999",
        "Rated": "R",
        "Genre": ["Drama"],
        "Director": "David Fincher",
        "Writer": "Chuck Palahniuk",
        "Actors": ["Edward Norton", " Brad Pitt", " Meat Loaf", " Zach Grenier"]
    },
    {
        "Title": "Inglourious Basterds",
        "Year": "2009",
        "Rated": "R",
        "Genre": ["Adventure", "Drama", "War"],
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": ["Brad Pitt", " Mélanie Laurent", " Christoph Waltz", " Eli Roth"]
    }
]

const wrapper = document.querySelector(".wrapper");

addDataToHTML();
function addDataToHTML(){

    for (let i = 0; i < movieList.length ; i++){

        const movie = movieList[i];
        const movieKey = Object.keys(movie); 

        const section = document.createElement('section');
        section.classList.add('movie-info-box');
        section.innerHTML =
            `<h1 class="movie-info-box__header">${movie.Title}</h1>
            <p class="movie-info-box__info"><span>${movieKey[1]}</span>: ${movie.Year}</p>
            <p class="movie-info-box__info"><span>${movieKey[2]}</span>: ${movie.Rated}</p>
            <p class="movie-info-box__info"><span>${movieKey[3]}</span>: ${movie.Genre}</p>
            <p class="movie-info-box__info"><span>${movieKey[4]}</span>: ${movie.Director}</p>
            <p class="movie-info-box__info"><span>${movieKey[5]}</span>: ${movie.Writer}</p>
            <p class="movie-info-box__info"><span>${movieKey[6]}</span>: ${movie.Actors}</p>`
        wrapper.appendChild(section); 
    }

};


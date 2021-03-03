
const movieList = [
    {
        "Title": "Django Unchained",
        "Year": "2012",
        "Rated": "R",
        "Genre": ["Drama", "Western"],
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio", "Kerry Washington"]
    },
    {
        "Title": "Brazil",
        "Year": "1985",
        "Rated": "R",
        "Genre": ["Drama", "Sci-Fi"],
        "Director": "Terry Gilliam",
        "Writer": "Terry Gilliam",
        "Actors": ["Jonathan Pryce", "Robert De Niro", "Katherine Helmond", "Ian Holm"]
    },
    {
        "Title": "American History X",
        "Year": "1998",
        "Rated": "R",
        "Genre": ["Drama"],
        "Director": "Tony Kaye",
        "Writer": "David McKenna",
        "Actors": ["Edward Norton", "Edward Furlong", "Beverly D'Angelo", "Jennifer Lien"]
    },
    {
        "Title": "Fight Club",
        "Year": "1999",
        "Rated": "R",
        "Genre": ["Drama"],
        "Director": "David Fincher",
        "Writer": "Chuck Palahniuk",
        "Actors": ["Edward Norton", "Brad Pitt", "Meat Loaf", "Zach Grenier"]
    },
    {
        "Title": "Inglourious Basterds",
        "Year": "2009",
        "Rated": "R",
        "Genre": ["Adventure", "Drama", "War"],
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": ["Brad Pitt", "Mélanie Laurent", "Christoph Waltz", "Eli Roth"]
    }
]

const wrapper = document.querySelector(".wrapper");

addDataToHTML();
function addDataToHTML() {

    for (let i = 0; i < movieList.length; i++) {

        const movieArray = Object.entries(movieList[i]);
        const section = document.createElement('section');

        section.classList.add('movie-info-box');
        section.innerHTML = `<h1 class="movie-info-box__header">${movieList[i].Title}</h1>`;

        for (let i = 1; i < movieArray.length; i++) {

            let [property, value] = movieArray[i];
            const pTag = document.createElement('p');

            // checks if value is an array object.
            if (Array.isArray(value)){
                value = value.join(', ');
            }

            pTag.classList.add('movie-info-box__info');
            pTag.innerHTML = `<span>${property}</span>: ${value}`; 
            section.appendChild(pTag);
        }
        wrapper.appendChild(section);
    }
};
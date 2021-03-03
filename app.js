
const wrapper = document.querySelector(".wrapper");

function addDataToHTML(movieList) {

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

fetchData();
async function fetchData() {
    const response = await fetch('movie.json')
    const result = await response.json()
    
    addDataToHTML(result)
}
const searchBtn = document.getElementById("search-button")
searchBtn.addEventListener("click", mySearchResults)



async function mySearchResults() {
    const input = document.getElementById("mySearch")
    const inputValue =input.value
    // const endpoints = `?t=${inputValue}`
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c4d3b60d}`)
    const data = await response.json()
    console.log(data)

}

// const posters = document.getElementById("main-section")
// posters.innerHTML=" "


// for(let movie of moviesArr) {
//     const posterDiv =document.createElement("div")
//     posterDiv.innerHTML= movie
//     posters.append(posterDiv)


// }
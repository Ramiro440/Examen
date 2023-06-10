async function fetching () {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const json = await response.json()
    return json
}

fetching().then(
    response => {
        let template = ``
        response.results.forEach(item => {
            template += `
            <div class="item">
            <a href="${item.url}">
                <img src="${item.image}" />
                <div class="item-description">
                    <h2>${item.name}</h2>
                    <h3>${item.status} - ${item.species} - ${item.gender}</h3>
                </div>
            </a>
            </div>
          `
        })
        results.innerHTML = template
    }
)

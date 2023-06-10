async function fetching () {
    const response = await fetch("https://rickandmortyapi.com/api/character/1")
    const json = await response.json()
    return json
}

fetching().then(
    item => {
        let template = `
            <div class="item-detail">
                <img src="${item.image}" />
                <div class="item-detail-description">
                    <h2>${item.name}</h2>
                    <h3>${item.status}</h3>
                    <h4>${item.species}</h4>
                    <p>${item.gender}</p>
                </div>
            </div>
          `
        results_detail.innerHTML = template
    }
)

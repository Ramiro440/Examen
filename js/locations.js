function getPage() {
    const url = window.location.search
    const urlParams = new URLSearchParams(url)
    const page = urlParams.get('page') || 1
    return page
}

async function fetching () {
    const page = getPage()
    const endpoint = `https://rickandmortyapi.com/api/location?page=${page}`

    const response = await fetch(endpoint)
    const json = await response.json()
    return json
}

fetching().then(
    locations => {
        paginationWrapper(locations.info)
        let template = ``
        locations.results.forEach(item => {
            template +=`
                <div class="item-locations-description">
                    <h2>${item.name}</h2>
                    <h3>${item.type} - ${item.dimension}</h3>
                </div>
            </div>
          `
        })
          results_locations.innerHTML = template
    }
)

function paginationWrapper (info) {
    const actualPage = getPage()
    let template = ``
    for (let locations = 1; locations <= info.pages; locations++) {
        template +=`
        <div class="page ${actualPage == locations ? 'current': ''}">
        <a href="locations.html?page=${locations}">${locations}</a>
        </div>
        `
        
    }
    pagination_location.innerHTML = template
}

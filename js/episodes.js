function getPage() {
    const url = window.location.search
    const urlParams = new URLSearchParams(url)
    const page = urlParams.get('page') || 1
    return page
}

async function fetching () {
    const page = getPage()
    const endpoint = `https://rickandmortyapi.com/api/episode?page=${page}`

    const response = await fetch(endpoint)
    const json = await response.json()
    return json
}

fetching().then(
    episodes => {
        paginationWrapper(episodes.info)
        let template = ``
        episodes.results.forEach(item => {
            template +=`
                <div class="item-episodes-description">
                    <h2>${item.name}</h2>
                    <h3>${item.air_date}</h3>
                    <h4>${item.episode} - ${item.created} </h4>
                </div>
            </div>
          `
        })
          results_episodes.innerHTML = template
    }
)

function paginationWrapper (info) {
    const actualPage = getPage()
    let template = ``
    for (let episodes = 1; episodes <= info.pages; episodes++) {
        template +=`
        <div class="page ${actualPage == episodes ? 'current': ''}">
        <a href="episodes.html?page=${episodes}">${episodes}</a>
        </div>
        `
        
    }
    pagination_episodes.innerHTML = template
}
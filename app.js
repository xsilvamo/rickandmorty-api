const cargaData = async(page) => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        console.log(res)

        const datosJson = await res.json();
        console.log(datosJson)

        const resultados = datosJson.results
        console.log(resultados)

        pintaCard(resultados)

    } catch (error) {
        console.log(error)
    }
}

const pintaCard = (personaje)=> {

    const container = document.querySelector('.card-container')
    container.innerHTML = ''

    const row = document.createElement('div');
    row.classList.add('row')

    personaje.map(item => {
        const col = document.createElement('div');
        col.classList.add('col-md-4')

        col.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Specie: ${item.species}</p>
                        <p class="card-text">Status: ${item.status}</p>
                        <p class="card-text"><small class="text-body-secondary">${item.location.name}</small></p>
                    </div>
                </div>
            </div>
        </div>

        `
        row.appendChild(col)
    })
    container.appendChild(row)
    
}

function navigate(page) {

    console.log(page)

    cargaData(page)
}

cargaData(1)
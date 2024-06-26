const cantantes  = [
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Taylor Swift',
        edad: 20,
        genero: 'Pop'
    },
    {
        nombre: 'Olivia Rodrigo',
        edad: 27,
        genero: 'Pop'
    },
    {
        nombre: 'Rosse',
        edad: 25,
        genero: 'K-Pop'
    },
    {
        nombre: 'Lissa',
        edad: 27,
        genero: 'K-Pop'
    },
    {
        nombre: 'Jennie',
        edad: 25,
        genero: 'K-Pop'
    },
    {
        nombre: 'Jisoo',
        edad: 21,
        genero: 'K-Pop'
    },
    {
        nombre: 'Kim taehyung',
        edad: 28,
        genero: 'K-Pop'
    },
    {
        nombre: 'JungKook',
        edad: 24,
        genero: 'K-Pop'
    },
    {
        nombre: 'Jimin',
        edad: 26,
        genero: 'K-Pop'
    },
];

    const cargarTarjeta = document.getElementById('cartas')

    cantantes.forEach(carta => {
        const cartasHtml = `
        <div class="col-sm-12 col-md-4 py-4">
        <div class="container shadow text-center p-3 rounded-4">
            <div class="row d-flex align-items-center">
                <div class="mb-4">
                    <img src="../img/karaoke.png" width="70px">
                </div>
                <div class="col">
                    <h3 class="fw-semibold">${carta.nombre}</h3>
                    <p class="fw-light">Cantante</p>
                </div>
            </div>
            <hr>
            <p class="bg-success text-light rounded-4 p-2 fw-semibold">Genéro</p>
            <p class="fw-semibold">${carta.genero}</p>
            <p class="bg-success text-light rounded-4 p-2 fw-semibold">Edad</p>
            <p class="fw-semibold">${carta.edad} años</p>
        </div>
    </div>`;
    cargarTarjeta.innerHTML += cartasHtml;
    })

console.log(cantantes);
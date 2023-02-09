const monstros= [
    {
        id: 1,
        nome: "Tron",
        altura: "1.90m",
        habilidades: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla eos illum vero commodi iste qui enim dolor totam harum, voluptas sint, a aspernatur cupiditate reprehenderit! Est laborum consequuntur ab",
        foto: "https://robohash.org/Osvaldo"
    },

    {
        id: 2,
        nome: "Megamind",
        altura: "1.50m",
        habilidades: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla eos illum vero commodi iste qui enim dolor totam harum, voluptas sint, a aspernatur cupiditate reprehenderit! Est laborum consequuntur ab",
        foto: "https://robohash.org/Megamind"
    },

    {
        id: 3,
        nome: "Ciber",
        altura: "1.80m",
        habilidades: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla eos illum vero commodi iste qui enim dolor totam harum, voluptas sint, a aspernatur cupiditate reprehenderit! Est laborum consequuntur ab",
        foto: "https://robohash.org/Ciber"
    },
    {
        id: 4,
        nome: "Detroid",
        altura: "2m",
        habilidades: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla eos illum vero commodi iste qui enim dolor totam harum, voluptas sint, a aspernatur cupiditate reprehenderit! Est laborum consequuntur ab",
        foto: "https://robohash.org/Detroid"
    }
]


const secao = document.querySelector('.monstros') 
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {

    document.documentElement.classList.toggle('dark')

} )

const todosOsMonstros = monstros.map( monstro => {
    return `<div> 
    <p class="features"> Nome: ${monstro.nome}</p>
    <p class="features"> Altura: ${monstro.altura}</p>
    <img src="${monstro.foto}">
    <p class="habilidades">-Habilidades: ${monstro.habilidades}</p>


    </div>`
} )

secao.innerHTML = todosOsMonstros
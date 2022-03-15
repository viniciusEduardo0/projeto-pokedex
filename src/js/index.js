// temos que ativar o click do nav, ao clicar em outro pokemon exibir o card do mesmo trabalhando com a listagem e a exibição do cartão simultaneamente.
// Precisamos criar 2 variáveis para trabalhar com os elementos da tela. Futuramente iremos inserir o evento do click pelo usuário na listagem de pokemons.
// On click em outro item da nav -> remover a classe aberto do card que está sendo exibido e buscar o id do pokémon para saber qual card exibir.
// remover a classe ativa e colocar no pokemon que marca o pokemon atual e atribur ela ao pokemon que foi clicado.

// 2 variáveis para os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// evento de click na nav, vai servir para todos os cards, evitar repetição
listaSelecaoPokemons.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    // remover o cartão que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // exibir card selecionado no nav
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    )
    cartaoPokemonParaAbrir.classList.add('aberto')

    // remover a classe ativa que marca o pokemon selecionado

    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    // adicionar a classe ativa no pokemon selecionado
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
  })
})

document.getElementById("retirar-carta").addEventListener("click", () => {
    tirarCartaAleatoria()
})

async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function selecionarCarta(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarCartaAleatoria(){
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await selecionarCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById("carta").src = imagemCarta
}

tirarCartaAleatoria()
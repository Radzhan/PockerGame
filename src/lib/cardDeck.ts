import Card from "./card";

class CardDeck {
  suit = ['diams', 'clubs', 'spades', 'hearts']
  rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  playingDeck: Card[] = [];
  constructor() {
    for (let i = 0; i < this.suit.length; i++) {
      for (let j = 0; j < this.rank.length; j++) {
        const cardNew = new Card(this.suit[i], this.rank[j])
        this.playingDeck.push(cardNew)
      }
    }
  }

  getCard () {
    const randomCard = Math.floor(Math.random() * (this.playingDeck.length - 1))
    const splice = this.playingDeck.splice(randomCard, 1)
    return splice[0]

  }

  getCards(howMany: number){
    const arr = []
    for (let i = 0 ; i < howMany; i++){
      arr.push(this.getCard())
    }
  }
}


export default CardDeck
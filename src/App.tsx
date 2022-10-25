import React, {useState} from 'react';
import './App.css';
import Card from "./lib/card";
import CardDeck from "./lib/cardDeck";
import PockerHand from "./lib/PockerHand";

interface cardsInterface {
  rank: string,
  suit: string,
}

function App() {
  const CardClass: React.FC<cardsInterface> = props => {
    const rankToLowerCase: string= props.rank.toLowerCase()
    const classForClass = "card rank-" + rankToLowerCase + " " + props.suit;
    let suitSimbol = '';
    if (props.suit === 'diams'){
      suitSimbol = '♦';
    } else if (props.suit === 'hearts'){
      suitSimbol = '♥';
    }else if (props.suit === 'clubs'){
      suitSimbol = '♣';
    }else if (props.suit === 'spades'){
      suitSimbol = '♠';
    }
    return(
      <span className={classForClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{suitSimbol}</span>
      </span>
    )
  };

  const cardD = new CardDeck()

  const [cards, setCards] = useState<Card[]>([]);
  let getNewCard = () => {
    const five = cardD.getCards(5)
    const hand = new PockerHand(five)
    hand.getOutcome()
    setCards([
      {suit: five[0].suit, rank: five[0].rank},
      {suit: five[1].suit, rank: five[1].rank},
      {suit: five[2].suit, rank: five[2].rank},
      {suit: five[3].suit, rank: five[3].rank},
      {suit: five[4].suit, rank: five[4].rank},
    ])
  }

  if (cards.length === 0) {
    return (
      <button onClick={getNewCard}>Array is empty!</button>
    )
  }
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <button onClick={getNewCard}>cards !</button>
        <CardClass rank={cards[0].rank} suit={cards[0].suit}/>
        <CardClass rank={cards[1].rank} suit={cards[1].suit}/>
        <CardClass rank={cards[2].rank} suit={cards[2].suit}/>
        <CardClass rank={cards[3].rank} suit={cards[3].suit}/>
        <CardClass rank={cards[4].rank} suit={cards[4].suit}/>
      </div>
    </div>
  );
}

export default App;

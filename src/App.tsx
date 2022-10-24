import React, {useState} from 'react';
import './App.css';
import Card from "./lib/card";
import CardDeck from "./lib/cardDeck";

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

  const [cards, setCards] = useState<Card[]>([]);

  let getNewCard = () => {
    const cardD = new CardDeck()
    cardD.getCards(5)
    setCards([

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
        <CardClass rank={'A'} suit={'clubs'} />
      </div>
    </div>
  );
}

export default App;

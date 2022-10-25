import Card from "./card";

class PockerHand {
  constructor(public array: Card []) {
  }

  message = '';
  getOutcome (){
    let counter = 0;
    let rankFrom: string[] = [];
    let suitFrom:string[] = [];
    for(let i = 0; i< this.array.length; i++){
      for (let j = 0; j < i; j++){
        if (this.array[i].rank === this.array[j].rank)
          counter++;
      }
      if (suitFrom.length === 0 || suitFrom[0] === this.array[i].suit){
        suitFrom.push(this.array[i].suit);
      }
      if (rankFrom.length === 0 || rankFrom[0] === this.array[i].rank){
        rankFrom.push(this.array[i].rank)
      }
    }
    if (counter === 1){
      this.message = 'Пара'
    }
    if (counter === 2){
      this.message = '2 пары'
    }
    if (rankFrom.length === 3) {
      this.message = 'cet'
    }
    if (suitFrom.length === 5){
      this.message = 'Flesh'
    }
    const div = document.createElement('div');
    div.innerHTML = this.message
    document.body.appendChild(div)
  }
}

export default PockerHand
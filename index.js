class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}




class Deck {
    constructor() {
        this.cards = [];
    }

    newDeck() {
        let suits = ['♣', '♦', '♥', '♠'];
        let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < rank.length; j++) {
             this.cards.push({
                suits: suits[i],
                rank: rank[j],
                value: j
             });
            }
        }
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.shift();
    }
    

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random () * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    addHand(deck) {
        for (let i = 0; i < deck.length; i++) {
            this.hand.push(deck[i]); 
        }
        return this.hand; 
    }

    addPoint() {
        this.score += 1;
        return this.score;
    }
}

let playerOne = new Player('Player 1');
let playerTwo = new Player('Player 2');

function startGame(p1, p2) {
    do {
        compareHand(p1, p2);
        console.log(`Player 1 Score: ${p2.score}, Player 2 Score: ${p2.score}`);
    } while (p1.hand.length != 0 && p2.hand.length != 0)
}

function compareHand(p1, p2) {
     let x = p1.hand.pop();
     let y = p2.hand.pop();

     if (x.value > y.value) {
         p1.hand.shift(x);
         p2.hand.shift(y);
         p1.addPoint();
         return p1.score;
    } else if (x.value < y.value) {
         p1.hand.shift(x);
         p2.hand.shift(y);
         p2.addPoint();
         return p2.score;
    } else {
         p1.hand.shift(x);
         p2.hand.shift(y);
         return 0;
    }
}

const playDeck = new Deck()

playDeck.newDeck();

console.log(playDeck)

playDeck.shuffle();

console.log(playDeck);


function dealDeck(playerOne, PlayerTwo, deck) {
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    let playerOneDeck = deck.cards.slice(0, deckMidpoint);
    let playerTwoDeck = deck.cards.slice(deckMidpoint, deck.numberOfCards);
    playerOne.addHand(playerOneDeck);
    playerTwo.addHand(playerTwoDeck);
    return playerOneDeck;
}

dealDeck(playerOne, playerTwo, playDeck);

console.log(playerOne.hand);
console.log(playerTwo.hand);




startGame(playerOne, playerTwo);

    //  return suits.flatMap(suit => {
        //      return ranks.map(rank => {
        //          return new Card(suit, rank)
        //      });
        //  });
/* 
Your task should you chose to accept...
Build a deck of playing cards by generating 52 strings representing cards. There are no jokers.

Each card string will have the format of:

"ace of hearts"
"ace of spades"
"ace of diamonds"
"ace of clubs"
And will consist of the following ranks:

ace two three four five
six seven eight nine ten
jack queen king
They do not need to be in order.

Additional constraints
1 line only!
buildDeck is a variable holding your deck. It is not a function.
*/

const createDeck = () => {
  const cardName = [
    'ace',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'jack',
    'queen',
    'king',
  ];
  const suidName = ['hearts', 'spades', 'diamonds', 'clubs'];
  const deck = [];
  for (let i = 0; i < cardName.length; i++) {
    const currendCard = cardName[i];
    for (let j = 0; j < suidName.length; j++) {
      deck.push(`${currendCard} of ${suidName[j]}`);
    }
  }
  return deck;
};
const buildDeck = [...createDeck()];

//Put the solution in one line))

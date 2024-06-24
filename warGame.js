// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// let deck = [];
// let player1Deck = [];
// let player2Deck = [];
// let player1Card = null;
// let player2Card = null;

// function initializeDeck() {
//     const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
//     const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     deck = [];

//     for (let suit of suits) {
//         for (let value of values) {
//             deck.push({ suit, value });
//         }
//     }

//     shuffleDeck();
// }

// function shuffleDeck() {
//     for (let i = deck.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
// }

// function dealCards() {
//     player1Deck = deck.slice(0, 26);
//     player2Deck = deck.slice(26, 52);
// }

// function drawCard(card, x, y) {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(x, y, 100, 150);
//     ctx.strokeRect(x, y, 100, 150);
//     ctx.fillStyle = 'black';
//     ctx.fillText(card.value + ' of ' + card.suit, x + 10, y + 75);
// }

// function getCardValue(card) {
//     const valueOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     return valueOrder.indexOf(card.value);
// }

// function playRound() {
//     if (player1Deck.length === 0 || player2Deck.length === 0) {
//         displayWinner();
//         return;
//     }

//     player1Card = player1Deck.shift();
//     player2Card = player2Deck.shift();

//     drawTable();

//     const player1Value = getCardValue(player1Card);
//     const player2Value = getCardValue(player2Card);

//     if (player1Value > player2Value) {
//         player1Deck.push(player1Card, player2Card);
//     } else if (player2Value > player1Value) {
//         player2Deck.push(player2Card, player1Card);
//     } else {
//         // Handle the war scenario (not implemented in this basic version)
//     }

//     setTimeout(playRound, 1000);
// }

// function drawTable() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     if (player1Card) {
//         drawCard(player1Card, 150, 200);
//     }
//     if (player2Card) {
//         drawCard(player2Card, 550, 200);
//     }
    
//     ctx.fillStyle = 'black';
//     ctx.fillText(`Player 1 cards: ${player1Deck.length}`, 50, 50);
//     ctx.fillText(`Player 2 cards: ${player2Deck.length}`, 650, 50);
// }

// function displayWinner() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'black';
//     if (player1Deck.length > player2Deck.length) {
//         ctx.fillText('Player 1 wins!', 350, 300);
//     } else {
//         ctx.fillText('Player 2 wins!', 350, 300);
//     }
// }

// // Initialize the game
// initializeDeck();
// dealCards();
// playRound();


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let deck = [];
let player1Deck = [];
let player2Deck = [];
let player1Card = null;
let player2Card = null;

function initializeDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }

    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards() {
    player1Deck = deck.slice(0, 26);
    player2Deck = deck.slice(26, 52);
}

function drawCard(card, x, y) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 100, 150);
    ctx.strokeRect(x, y, 100, 150);
    ctx.fillStyle = 'black';
    ctx.fillText(card.value + ' of ' + card.suit, x + 10, y + 75);
}

function getCardValue(card) {
    const valueOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return valueOrder.indexOf(card.value);
}

function playRound() {
    if (player1Deck.length === 0 || player2Deck.length === 0) {
        displayWinner();
        return;
    }

    player1Card = player1Deck.shift();
    player2Card = player2Deck.shift();

    drawTable();

    const player1Value = getCardValue(player1Card);
    const player2Value = getCardValue(player2Card);

    if (player1Value > player2Value) {
        player1Deck.push(player1Card, player2Card);
    } else if (player2Value > player1Value) {
        player2Deck.push(player2Card, player1Card);
    } else {
        // Handle the war scenario (not implemented in this basic version)
    }

    setTimeout(playRound, 1000);
}

function drawTable() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (player1Card) {
        drawCard(player1Card, 150, 200);
    }
    if (player2Card) {
        drawCard(player2Card, 550, 200);
    }
    
    ctx.fillStyle = 'black';
    ctx.fillText(`Player 1 cards: ${player1Deck.length}`, 50, 50);
    ctx.fillText(`Player 2 cards: ${player2Deck.length}`, 650, 50);
}

function displayWinner() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    if (player1Deck.length > player2Deck.length) {
        ctx.fillText('Player 1 wins!', 350, 300);
    } else {
        ctx.fillText('Player 2 wins!', 350, 300);
    }
}

// Initialize the game
initializeDeck();
dealCards();
playRound();


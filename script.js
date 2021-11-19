let movesCounter = 0;

let movesTable = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function makeMove(cell, x, y) {
    if (movesCounter % 2 === 0 && movesTable[x][y] === 0) {
        document.getElementById(cell).innerHTML = "X";
        movesTable[x][y] = "X";
        ++movesCounter;
    } else if (movesCounter % 2 !== 0 && movesTable[x][y] === 0) {
        document.getElementById(cell).innerHTML = "O";
        movesTable[x][y] = "O";
        ++movesCounter;
    }
    if (movesCounter >= 4 && movesCounter <= 8) {
        let validMoves = ['', '', '', '', '', '', '', ''];
        for (let i = 0; i < 3; ++i) {
            validMoves[0] += movesTable[0][i]; //first row
            validMoves[1] += movesTable[1][i]; //second row
            validMoves[2] += movesTable[2][i]; //third row
            validMoves[3] += movesTable[i][0]; //first column
            validMoves[4] += movesTable[i][1]; //second column
            validMoves[5] += movesTable[i][2]; //third column
            validMoves[6] += movesTable[i][i]; //main diagonal
            validMoves[7] += movesTable[i][2 - i]; //secondary diagonal
        }
        for (let move of validMoves) {
            whoWon(move);
        }
    } else if (movesCounter > 8) {
        endGame('draw');
    }
}

function whoWon(pWinner) {
    if (pWinner === 'XXX') {
        endGame('X');
    } else if (pWinner === 'OOO') {
        endGame('O');
    }
}

function endGame(status) {
    for (let i = 0; i < 9; ++i) {
        document.getElementById(i).removeAttribute("onclick");
    }
    if (status === 'draw') {
        document.getElementById("notification").innerHTML = `<hr><div class="alert alert-warning" role="alert">
        Draw!
      </div><button type="button" class="btn btn-primary" onclick="playAgain()">Play again!</button>`
    } else {
        document.getElementById("notification").innerHTML = `<hr><div class="alert alert-success" role="alert">
        <strong>` + status + `</strong> WON!
      </div><button type="button" class="btn btn-primary" onclick="playAgain()">Play again!</button>`
    }
}

function playAgain() {
    location.reload();
}
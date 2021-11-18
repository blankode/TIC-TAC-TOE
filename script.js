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
    if (movesCounter >= 2 && movesCounter <= 8) {
        let row1 = '', row2 = '', row3 = '';
        let col1 = '', col2 = '', col3 = '';
        let diag1 = '', diag2 = '';
        for (let i = 0; i < 3; ++i) {
            row1 += movesTable[0][i];
            row2 += movesTable[1][i];
            row3 += movesTable[2][i];
            col1 += movesTable[i][0];
            col2 += movesTable[i][1];
            col3 += movesTable[i][2];
            diag1 += movesTable[i][i];
            diag2 += movesTable[i][2 - i];
        }
        whoWon(row1);
        whoWon(row2);
        whoWon(row3);
        whoWon(col1);
        whoWon(col2);
        whoWon(col3);
        whoWon(diag1);
        whoWon(diag2);
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
        <strong>`+ status + `</strong> WON!
      </div><button type="button" class="btn btn-primary" onclick="playAgain()">Play again!</button>`
    }
}

function playAgain() {
    location.reload();
}
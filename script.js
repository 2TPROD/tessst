let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let currentPlayer = "X";

function handleClick(x, y) {
    if (board[x][y] === "") {
        board[x][y] = currentPlayer;
        updateBoard();
        if (checkWin(x, y)) {
            alert(`Le joueur ${currentPlayer} a gagné !`);
            resetBoard();
        } else if (checkDraw()) {
            alert("Match nul !");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function updateBoard() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        const x = Math

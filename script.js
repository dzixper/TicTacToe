let playButton = document.getElementById("play-button"),
    board = document.getElementById("board"),
    b00 = document.getElementById("b00"),
    b01 = document.getElementById("b01"),
    b02 = document.getElementById("b02"),
    b10 = document.getElementById("b10"),
    b11 = document.getElementById("b11"),
    b12 = document.getElementById("b12"),
    b20 = document.getElementById("b20"),
    b21 = document.getElementById("b21"),
    b22 = document.getElementById("b22"),
    currentPlayer = document.getElementById("current-player"),
    myAudioQuack = document.getElementById("my-audio-quack");


let char,
    turn;


function who() {
    currentPlayer.innerText = "Now it's -" + char + "- turn";
}
reset();
who();

function reset() {
    char = "x";
    turn = 0;
    who();
    board.style.display = 'grid';
    b00.value = "  ";
    b00.className = "boardButton";
    b01.value = "  ";
    b01.className = "boardButton";
    b02.value = "  ";
    b02.className = "boardButton";
    b10.value = "  ";
    b10.className = "boardButton";
    b11.value = "  ";
    b11.className = "boardButton";
    b12.value = "  ";
    b12.className = "boardButton";
    b20.value = "  ";
    b20.className = "boardButton";
    b21.value = "  ";
    b21.className = "boardButton";
    b22.value = "  ";
    b22.className = "boardButton";
}

function changePlayer() {
    if (char == "x") {
        char = "o";
    } else {
        char = "x";
    }
}

function checkDraw() {
    if (turn == 9 && !checkWinner()) return true;
    else return false;
}

function mark(cell) {
    if (cell.value == "  ") {
        myAudioQuack.play();
        cell.value = char;
        cell.className = "boardButtonTaken";
        turn += 1;
        if (checkWinner()) {
            alert("You win!");
            reset();
        } else if (checkDraw()) {
            alert("Draw!");
            reset();
        }
        changePlayer();
        who();
    } else {
        alert("This cell is ocupied");
    }
}

function checkWinner() {
    if (b00.value == char && b01.value == char && b02.value == char) return true;
    if (b10.value == char && b11.value == char && b12.value == char) return true;
    if (b20.value == char && b21.value == char && b22.value == char) return true;
    if (b00.value == char && b10.value == char && b20.value == char) return true;
    if (b01.value == char && b11.value == char && b21.value == char) return true;
    if (b02.value == char && b12.value == char && b22.value == char) return true;
    if (b00.value == char && b11.value == char && b22.value == char) return true;
    if (b20.value == char && b11.value == char && b02.value == char) return true;
    else return false;
}

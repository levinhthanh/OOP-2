let player1 = '';
let player2 = '';
function setPlayer(){
    player1 = document.getElementById('name1').value;
    player2 = document.getElementById('name2').value;
}
let banco = '';

let valueGame = new Array();
for (let i = 0; i < 20; i++) {
    valueGame[i] = new Array();
}

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        valueGame[i][j] = 0;
    }
}
for (let i = 0; i < 20; i++) {
    banco += '<div id="row">';
    for (let j = 0; j < 20; j++) {
        banco += '<div class="oco"><img id="r' + i + 'c' + j + '" src="user0.png" onclick="put(' + i + ',' + j + ')"></div>'
    }
    banco += '</div>';
}
document.getElementById('banco').innerHTML = banco;


let waitClick = document.getElementById('banco');
let Id = '';
let step = 0;
let win;

function put(i, j) {
    Id = 'r' + i + 'c' + j;
    if (step % 2 === 0) {
        document.getElementById(Id).src = "user1.png";
        valueGame[i][j] = 1;
        win = checkWin();
        if(win) alert(player1 +' chiến thắng!')
    }

    else {
        document.getElementById(Id).src = "user2.png";
        valueGame[i][j] = 2;
        win = checkWin();
        if(win) alert(player2 +' chiến thắng!')
    }
    step++;
}

function checkWin() {
    for (i = 0; i < 16; i++) {
        if ((valueGame[0][i] === valueGame[0][i + 1] & valueGame[0][i + 1] === valueGame[0][i + 2] & valueGame[0][i + 2] === valueGame[0][i + 3] & valueGame[0][i + 3] === valueGame[0][i + 4] & valueGame[0][i + 4] !== 0) ||
            (valueGame[1][i] === valueGame[1][i + 1] & valueGame[1][i + 1] === valueGame[1][i + 2] & valueGame[1][i + 2] === valueGame[1][i + 3] & valueGame[1][i + 3] === valueGame[1][i + 4] & valueGame[1][i + 4] !== 0) ||
            (valueGame[18][i] === valueGame[18][i + 1] & valueGame[18][i + 1] === valueGame[18][i + 2] & valueGame[18][i + 2] === valueGame[18][i + 3] & valueGame[18][i + 3] === valueGame[18][i + 4] & valueGame[18][i + 4] !== 0) ||
            (valueGame[19][i] === valueGame[19][i + 1] & valueGame[19][i + 1] === valueGame[19][i + 2] & valueGame[19][i + 2] === valueGame[19][i + 3] & valueGame[19][i + 3] === valueGame[19][i + 4] & valueGame[19][i + 4] !== 0) ||
            (valueGame[i][0] === valueGame[i + 1][0] & valueGame[i + 1][0] === valueGame[i + 2][0] & valueGame[i + 2][0] === valueGame[i + 3][0] & valueGame[i + 3][0] === valueGame[i + 4][0] & valueGame[i + 4][0] !== 0) ||
            (valueGame[i][1] === valueGame[i + 1][1] & valueGame[i + 1][1] === valueGame[i + 2][1] & valueGame[i + 2][1] === valueGame[i + 3][1] & valueGame[i + 3][1] === valueGame[i + 4][1] & valueGame[i + 4][1] !== 0) ||
            (valueGame[i][18] === valueGame[i + 1][18] & valueGame[i + 1][18] === valueGame[i + 2][18] & valueGame[i + 2][18] === valueGame[i + 3][18] & valueGame[i + 3][18] === valueGame[i + 4][18] & valueGame[i + 4][18] !== 0) ||
            (valueGame[i][19] === valueGame[i + 1][19] & valueGame[i + 1][19] === valueGame[i + 2][19] & valueGame[i + 2][19] === valueGame[i + 3][19] & valueGame[i + 3][19] === valueGame[i + 4][19] & valueGame[i + 4][19] !== 0)) {
            return true;
        }
        for (i = 2; i < 18; i++) {
            for (j = 2; j < 18; j++) {
                if (valueGame[i][j] === valueGame[i + 1][j + 1] & valueGame[i][j] === valueGame[i + 2][j + 2] & valueGame[i][j] === valueGame[i - 1][j - 1] & valueGame[i][j] === valueGame[i - 2][j - 2] & valueGame[i][j] !== 0 ||
                    valueGame[i][j] === valueGame[i - 1][j + 1] & valueGame[i][j] === valueGame[i - 2][j + 2] & valueGame[i][j] === valueGame[i + 1][j - 1] & valueGame[i][j] === valueGame[i + 2][j - 2] & valueGame[i][j] !== 0 ||
                    valueGame[i][j] === valueGame[i + 1][j] & valueGame[i][j] === valueGame[i + 2][j] & valueGame[i][j] === valueGame[i - 1][j] & valueGame[i][j] === valueGame[i - 2][j] & valueGame[i][j] !== 0 ||
                    valueGame[i][j] === valueGame[i][j + 1] & valueGame[i][j] === valueGame[i][j + 2] & valueGame[i][j] === valueGame[i][j - 1] & valueGame[i][j] === valueGame[i][j - 2] & valueGame[i][j] !== 0) {
                    return true;
                }
            }
        }

    }
    return false;
}




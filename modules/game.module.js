const GameController = (function() {
  const gameAction = $(".gameBoard div .row div"),
        board = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        playerPos = [],
        computerPos = [];

  let turn = 0;

  const move = (id, type) => {
    let index = Number(id);
    board[index] = type;
    $("#"+index).text(type);
    if(type === "X") { playerPos.push(index) }
    else { computerPos.push(index) }
    turn+= 2;
  };

  const nextTurn = (id) => {
    if(turn === 2) { ComputerController.firstMove(id) }
    if(turn === 4) { ComputerController.secondMove(id) }
    if(turn === 6) { ComputerController.thirdMove(id) }
    if(turn === 8) { ComputerController.fourthMove(id) }
  };

  const checkPos = () => {
    return {
      playerPos,
      computerPos
    };
  };

  return {
    move,
    checkPos,
    nextTurn,
    gameAction
  };
})();



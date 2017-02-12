const GameController = (function() {
  const gameAction = $(".gameBoard div .row div"),
        board = {
          1: null, 
          2: null, 
          3: null, 
          4: null, 
          5: null, 
          6: null, 
          7: null, 
          8: null, 
          9: null
        },
        playerPos = [],
        computerPos = [];

  let turn = 0;

  const move = (id, type) => {
    board[id] = type;
    $("#"+id).text(type);
    if(type === "X") { playerPos.push(id) }
    else { computerPos.push(id) }
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



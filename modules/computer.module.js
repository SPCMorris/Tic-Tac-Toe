const ComputerController = (function() {
  const selection = GameController.move,
        positionCheck = GameController.checkPos;

  const firstMove = () => {
    if(positionCheck().playerPos[0] !== "4") {  selection(4, "O") }
    else {  selection(0, "O") }
  };

  const secondMove = (id) => {

  };

  const thirdMove = (id) => {

  };

  const fourthMove = (id) => {

  };

  return {
    firstMove,
    secondMove,
    thirdMove,
    fourthMove
  };
})();
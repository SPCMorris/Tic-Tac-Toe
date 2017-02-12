const ComputerController = (function() {
  const firstMove = () => {
    if(GameController.checkPos().playerPos[0] !== "5") {  GameController.move(5, "O") }
    else {  GameController.move(1, "O") }
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
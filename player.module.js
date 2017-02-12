const PlayerController = (function() {
    const playerSelection = (elem) => {
      let field = $(elem.target),
          value = field.text();

      if(value === "X" || value === "O") { alert("This spot is already in play!") }
      else { 
        let id = field.attr("id");
        GameController.move(id, "X")
        GameController.nextTurn(id);
      }
    };

  return {
    playerSelection
  };
})();
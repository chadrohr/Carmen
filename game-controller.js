function startGame() {
    new GameManager(function(gm) {
     gm.getCities(){
       console.log(cities)
     } 
    })
  }
$('#start').on('click', startGame);

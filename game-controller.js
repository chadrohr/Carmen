function startGame() {
    new GameManager(function(gm) {
var gumshoe = gm.getGumshoe()
$('#city').text(gumshoe.city)
$('#budget').text(gumshoe.budget)


//gm.getGumshoe()
// $('#city').on('click', function(event))
console.log(gm.getGumshoe())





    })
   // JQUERY HOOKS GO DOWN HERE :)
    // You will need to use Event Delegation

   

   
  }
$('#start').on('click', startGame);
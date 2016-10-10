Where in the World is Carmen Sansiego TM
========================================

This Game is all about using the GameManager Interface to search for and capture Carmen Sansiego.

###The Setup

Your role in this game is the Gumshoe. You are looking for Carmen. The GameManger will control everything about this game you must simply build the controls necessary for the game to function. 

Getting used to using the GameManger Interface might be a bit tricky but here are the methods that will be most helpful. 

```javascript

gm.getGumshoe() 
/**
* returns an object with the following properites
* {
*    city: string,
*    budget: number
* }
* This object cannot be directly manipulated. 
* You must use the GameManger to update your player
*/ 

gm.getCities()
/**
* returns a list of the cities available in the game
*/
  
gm.getTravelCost(cityName)
/**
* This method will tell you the ticket cost to fly 
* between your current city and the desired destination
* This is simply the cost of the ticket it does not 
* actually charge the gumShoe to run this function
*/

gm.getSearchCost() 
/**
* No city needed as it will calculate the 
* cost of searching the city you are currently in.
* Again this is a cost analysis only it 
* doesn't actually search or cost anything
* to run this function
*/

gm.flyTo(cityName, callback)
/**
* This function will actually cost you money
* so hopefully you know how much that will be 
* from the functions above.
* 
* This function will also move your GumShoe
* between cities
* 
* Because we don't live in a time of
* instant teleportation flying between cities
* takes time... So you are going to need to 
* handle the Async nature of flying. 
* What do you want to happen once you land at your 
* new destination? 
*/

gm.checkGuess(callback)
/**
* Time to search your current city hopefully
* you still have enough money in your budget 
* to do so.
*
* Searching a city for the infamous Carmen
* is going to take some time so this is another place
* where you are going to have to handle the results 
* after finishing the search. 
*
* Searching will either return true if Carmen 
* is found and will set the game victory status to true
* or it will give you a clue as to where you might 
* find Carmen next. It's up to you if you want to follow
* the clue or not.
*/
```


### Getting Started - The GumShoe

One of your first problems to solve is figuring out where you start the game. This information is availble to you through the `gm.getGumshoe`.

After the game countdown ends you should probably get your `Gumshoe` and draw to the screen your `budget` and your `city`.

```javascript spoiler
new GameManager(function(gm) {
  var gumshoe = gm.getGumShoe();
  
  $('#city').text(gumshoe.city)
  $('#budget').text(gumshoe.budget)
  
})
```

### The travel destinations

Where in the world do you want to go? The game has some of Carmens favorite places to hide out on a list that you can gain access to by calling `gm.getCities()`

Once you know what cities are available its fairly strait forward to figure out the cost of flying to a cities by simply asking the `gm.getTravelCost(cityName)`

The function above uses your current city and the name of another citie to calculate the cost of a flight. Can you think of a creative way to show all this information to the user so we can make a choice about where we want to fly without losing all of our money.


```javascript spoiler
new GameManager(function(gm) {
  //.....
  
  var cities = gm.getCities();
  
  for(var i = 0; i < cities.lenth; i++){
    var cityName = cities[i];
    $('#cities').append(`<h1>${cityName} - Cost to fly ${gm.getTravelCost(cityName)}</h1>`)
  }
})
```


### Finding Carmen

The game always knows where you currently are so if you want to try your luck at looking for Carmen in your current city just know that its going to cost you. You can figure out exactly how much it will cost to search your city by asking the `gm.getSearchCost()`

Asking is free but it will cost you to actually search. This part should be the easiest thing in this game simply tell the you want to guess.

```javascript spoiler
gm.checkGuess(function(victory){
  if(victory){
    alert('Woot you have captured the infamous Carmen')
  }
}) 
```


Good luck Gumshoe. We are counting on you to bring justice back to Carmen Sansiego TM.





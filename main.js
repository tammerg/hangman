var prompt = require ("prompt");
prompt.start();
var words = require("./word.js")

var hangGame = {
  wordBank = ["jazzed", "beekeepers","parallaxes","grubbiness", "wobbliness","hobnobbing","fazes","wheeziness","mummifying"]
  guessesRemaining: 11
  currentWord: null
  startGame: function(Wrd){
  var rando = Math.floor(Math.random() * 10)
  this.currentWrd = new Word(this.wordBank[rando]);
  this.currentWrd.getLets();
  this.keepPromptingUser();
  };
  //gameplay/prompt function
  keepPromptingUser: function(){
    var self = this
    prompt.get(["guessLetter"], function(err,result){
      console.log("The Letter or space you guessed is" + result.guessLetter)
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter)
      if (findHowManyOfUserGuess === 0){
        console.log("You guessed wrong!")
        self.guessesRemaining--; 
      }
      else{
        console.log("You guessed right!")
        if (currentWord.didWeFindTheWrd() === true){
          console.log("You Won!!!");
          return 1;
        }
        else if(self.guessesRemaining === 0){
          console.log("Game Over.");
          console.log("The word was" + self.currentWrd.wrd);
        }
        else{
          console.log(self.currentWrd.wordRender());
        }
      }
    });
  }
};

//starts the game
hangGame.startGame();

}
module.exports = Word;
var Letter = require("./letterfinder.js");

function Word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  getLetters: function(){
    for(var i = 0; i < word.length; i++){
      this.lets.push(new Letter(wrd[i]));
    };
  };
  checkIfLetterFound: function(guessLetter){
    var lettersFound = 0;
    for (var i = this.lets.length - 1; i >= 0; i--) {
      if(this.lets[i].charac == guessLetter){
        this.lets[i].appear = true;
        lettersFound++;
      };
    }
    return lettersFound;
  };
  didWeFindTheWOrd: function(){
    if(this.lets.every(fucntion(curLet){
      return curLet.appear === true;
    })){
      this.found === true
    };
    return this.found;
  };
  wordRender: function(){
    var str = ""
    for (var i = lets.length - 1; i >= 0; i--) {
      str += this.lets[i].letterRender(this.lets[i]);
    };
    return str;
  };
};
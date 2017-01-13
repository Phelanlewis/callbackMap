var words = ["ground", "control", "to", "major", "tom"];

var wordLengthCount = function(word) {
  return word.length;
};

var map = function(arr, counting){
  var i = 0;
  var wordLength = [];
    while(i < arr.length){
      wordLength.push(counting(arr[i]));
      i++;
    }
  console.log(wordLength);
}

map(words, wordLengthCount);

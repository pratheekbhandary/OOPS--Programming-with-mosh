//Never use prototype dec inside constructor
var Counter = function(initialValue){
  var value = initialValue;

  // product is a JSON object
  Counter.prototype.get = function() {
      return value++;
  }

};

var c1 = new Counter(0);
var c2 = new Counter(10);
console.log(c1.get());
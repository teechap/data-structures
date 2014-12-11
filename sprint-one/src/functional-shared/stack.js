var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  for (var key in stackMethods){
    instance[key] = stackMethods[key];
  }
  return instance;
};

var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};
stackMethods.pop = function(){
  if (this.length > 0){
    this.length--;
    var elem = this.storage[this.length];
    delete this.storage[this.length];
    return elem;
  }
};
stackMethods.size = function(){
  return this.length;
};



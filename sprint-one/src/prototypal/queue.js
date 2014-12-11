var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.length = 0;
  instance.count = 0;
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.length + this.count] = value;
  this.length++;
};
queueMethods.dequeue = function(){
  if (this.length > 0){
    this.length--;
    var elem = this.storage[this.count];
    this.count++;
    if (this.length === 0){
      this.count = 0;
      this.storage = {};
    }
    return elem;
  }
};
queueMethods.size = function(){
  return this.length;
};

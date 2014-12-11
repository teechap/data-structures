function Queue(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length + this.count] = value;
  this.length++;
};
Queue.prototype.dequeue = function(){
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
Queue.prototype.size = function(){
  return this.length;
};


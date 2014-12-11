var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var length = 0;
  var count = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length + count] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      length--;
      count++;
      return (function() {
        var elem = storage[count - 1];
        if ( length === 0) {
          count = 0;
          storage = {};
        }
        return elem;
      })();
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};

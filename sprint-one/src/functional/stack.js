var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var count = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    if (count > 0) {
      count--;
      var elem = storage[count];
      delete storage[count];
      return elem;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};

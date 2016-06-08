var _ = {
  reject: function(arr, callback){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(!callback(arr[i])){
        newArr.push(arr[i])
      }
    }
    return newArr;
  },
  find: function(list, predicate){
    for(i in list){
      if(predicate(list[i]))
        return list[i];
    }
    return;
  },
  filter: function(obj, callback) {
    filtered_array = [];
    for(var i = 0; i < obj.length; i++){
      if(callback(obj[i])){
        filtered_array.push(obj[i]);
      }
    }
    return filtered_array;
  },
  map: function(obj, callback) {
    var newarr = [];
    for(var i = 0; i < obj.length; i ++){
      newarr.push(callback(obj[i]));
    }
    return newarr;
  },
  reduce: function(obj, callback, memo) {
    if(memo == undefined){
      memo = obj[i];
      for(var i = 1; i < obj.length; i++){
        memo = callback(memo, obj[i]);
      }
    }
    else {
      for(var i = 0; i < obj.length; i++){
        memo = callback(memo, obj[i]);
      }
    }
    return memo;
  },
}

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //should return [2, 4, 6] after you finish
console.log(evens);
var div4 = _.find([1, 2, 3, 4, 5, 6, 7, 8], function(num) {return num % 4 == 0 });
console.log(div4);
var rejectodds = _.reject([1, 2, 3, 4, 5 ,6], function (num) {return num % 2 == 0 });
console.log(rejectodds);
var map = _.map([1, 2, 3, 4, 5, 6], function(num) {return num * 3 });
console.log(map);
var reduce = _.reduce([1, 2, 3, 4, 5, 6], function(memo, num) {return memo + num;}, 0);
console.log(reduce);

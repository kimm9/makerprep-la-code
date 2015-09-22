function p(input){
  console.log(input);
}


// each
function each(collection, fn){
  if (Array.isArray(collection)){
    for(var i=0; i<collection.length; i++){
      fn(collection[i]);
    }
  } else {
    for (var key in collection){
      fn(collection[key]);
    }
  }
}



// map
function map(collection, callback){
  var mapped = [];

  each(collection, function(item){
    mapped.push(callback(item));
  });
  return mapped;
}




// filter
function filter(collection, test){
  var filtered = [];

  each(collection, function(item){
    if (test(item));
    filtered.push(item);
  }
  return filtered;
}




// reduce
function reduce(collection, combine, startVal) {
  var counter = 0,
    total = 0;

  if (collection.length === 0) {
    return collection;
  }

  if (arguments.length === 2) {
    counter = 1;
    total = collection[0];
  } else if (arguments.length >= 3) {
    counter = 0;
    total = startVal;
  }

  while (counter < collection.length) {
    total = callback(total, collection[counter]);
    counter++;
  }

  return total;
}




// contains

function contains(collection, target){

  return reduce(collection, function(val, startVal){
    	if(startVal){ return true; }
    	return target === val;
  }, false);

}



// every

function every (collection, predicate){

  return reduce(collection, function(accumulated, current){
    if (accumulated){
      return predicate(current);
    } else {
      return false;
    }
  }, true);

}


// pluck

function pluck (collection, key){

  return collection.map(function(item){
    return item[key];
  });

}


// some
function some (collection, testing){

  return reduce (collection, function(accum, current){
    if (accum){
      return true;
    }
    return testing(current);
  }, false);

}

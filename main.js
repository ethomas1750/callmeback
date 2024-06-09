const identity = function (x) {
    return x
  };
  
  const first = function (array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, num);
  };
    
  const last = function (arr, n) {
    if (n === 0) {
      return [];
    }
    if (n === undefined) {
      return arr[arr.length - 1];
    } else {
      return arr.slice(-n);
    }
  };
  
  const each = function (collection, iterator) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else if (typeof collection === "object") {
      for (const key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };
  
  const indexOf = function (str, search) {
    for(let i = 0; i < str.length; i++){
      if(str[i] === search){
        return i
      }
    } return -1
  };
  const map = function (array, iterator) {
    const results = [];
    for (const element of array) {
      results.push(iterator(element));
    }
    return results;
  }
  
  
  const filter = (collection, callback)=>{
     const results = [];
  for (const element of arr) {
    results.push(i(element));
  }
  return results;
  }
  
  const reject = (collection, callback)=>{
   
  }
  
  const uniq = (collection) =>{
  let uniqueArr = []

  for(let i = 0; i < collection.length; i++){
    let newCollection = collection[i]

    if(uniqueArr.indexOf(newCollection) === -1){
      uniqueArr.push(newCollection)
    }
  }   return uniqueArr
}
  }
  
  const reduce = (collection, callback, initialVal) =>{
  et accumulator = initialVal
   for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
    }
    accumulator = callback(accumulator, collection[key])
   }
      return accumulator
}
  }
  
  module.exports = {
    identity,
    first,
    last,
    each,
    indexOf,
    map,
    filter, 
    reject, 
    uniq, 
    reduce
  };

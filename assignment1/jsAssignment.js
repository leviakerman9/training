// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?

function secondLargest(array) {
  // Write your code here
  var largest = array[0];
  var slargest = Number.MIN_VALUE;
  if (array[0] == array[1]) {
    return -1;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      slargest = largest;
      largest = array[i];
    } else if (array[i] > slargest && array[i] < largest) {
      slargest = array[i];
    }
  }
  return slargest;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)

function calculateFrequency(string) {
  // Write your code here
   let freqarr = new Array(26).fill(0);

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (ch >= 'a' && ch <= 'z') {
      let val = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      freqarr[val]++;
    }
  }

  let ans = {};
 for(let i=0; i<26; i++){
   if(freqarr[i]>0){
   let ch=String.fromCharCode(i + 97);
   ans[ch]=freqarr[i];
 }
 }
  return ans;
   
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

function flatten(unflatObject,parent='',res={}) {
  
  for(let key in unflatObject){
    let newKey= parent ? parent + "." + key : key;
    
    if( typeof unflatObject[key] == 'object'){
      flatten(unflatObject[key], newKey,res)
    }else{
      res[newKey]= unflatObject[key];
    }
  }
  return res;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format

function unflatten(flatObject) {
  let result = {};

  for (let key in flatObject) {
    const parts = key.split('.');
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (i === parts.length - 1) {
        current[part] = flatObject[key];
      } else {
      
        if (!(part in current)) {
          current[part] = {};
        }
        current = current[part]; 
      }
    }
  }

  return result;
}
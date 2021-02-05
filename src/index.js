exports.min = function min (array) {
  
  if(typeof(array)=='undefined' || array.length ==0) return 0
 return typeof(Math.min(...array)) == "number" ? Math.min(...array) : 0
}

exports.max = function max (array) {
  if(typeof(array)=='undefined' || array.length ==0) return 0
  return typeof(Math.max(...array)) == "number" ? Math.max(...array) : 0
 
}

exports.avg = function avg (array) {
  if(typeof(array)=='undefined' || array.length ==0) return 0
 
  let a=0;
  let b=0
  for(let i=0;i<array.length;i++){b=b+array[i], a=a+1}
  return typeof(b/a) == "number" ? b/a :0;
  

}

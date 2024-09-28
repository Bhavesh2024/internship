const myData = ['bhavesh','jayesh','satish','haresh'];

const insert = (arr,index,data) =>{
  // arr[index] = data;
  if(index >= arr.length){
      console.log("index not available") 
  }
  for(let i = 0; i <= arr.length; i++){
    if(index == i){
        arr[i + 1] = arr[i]
        arr[i] = data;
    }
  }
}
console.log(myData);

console.log(myData.splice(0,1))
console.log(myData.push('suresh'));
console.log(myData.unshift('bhavesh'))

console.log(insert(myData,1,'kajal'))
console.log(insert(myData,4,'payal'))
console.log(insert(myData,15,'sajan'))

console.log(myData);


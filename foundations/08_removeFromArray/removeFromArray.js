const removeFromArray = function(arr, ...theArgs){
    console.log(arr, theArgs)
    let newArr = arr.filter((x)=> !theArgs.includes(x))
    console.log(newArr)
    return newArr
}



// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(x, y) {
    if (x < 0 || y < 0 ){
        return 'ERROR';
    }else if(!Number.isInteger(x) || !Number.isInteger(y)){
        return 'ERROR';
    }
    const arr = [x,y];
    arr.sort((a, b) => a - b);

    let firstNum = arr[0]
    let lastNum = arr[1]
    for (let i = (firstNum + 1); i < lastNum ; i++){
        arr.push(i);
        // console.log(arr);
    }
    const sumOfall = arr.reduce((total, current) => total + current)
    return sumOfall;

};

// Do not edit below this line
module.exports = sumAll;
    

//create array
//sort it from lowest to 
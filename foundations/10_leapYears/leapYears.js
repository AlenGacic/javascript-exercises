const leapYears = function(x) {
    let year = Number(x);
        if(year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)){
            return false;
        }else{
            return true;
        }

}

// Do not edit below this line
module.exports = leapYears;





// 5 Practice Problems:
// Array Total Sum: Array ke sabhi numbers ka sum nikalo.
const numbers  = [5,4,9,23,12]
const getTotal = (arr) => {
    let total = 0;
    for(let i = 0 ; i < arr.length ; i++){
        total += arr[i]
    }
    return total ;
}

console.log('total :', getTotal(numbers));

// Average Calculator: Saare numbers ka average nikalo.
const getAverage = (arr) => {
     let total = 0;
     for(let i = 0; i < arr.length; i++){
        total += arr[i]
     }
     let avg = total / arr.length;
     return avg
}

console.log('average calc: ', getAverage(numbers))
// Count Evens: Array me kitne even numbers hain, unka count nikalo.
const getEvenCount = (arr) =>{
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] %2 === 0) count++
    }
    return count;
}
console.log('count even numbers in an array :', getEvenCount(numbers))

// Product of Elements: Array ke saare elements ko multiply karke total product nikalo.
const getProdunctOfArr = (arr) =>{
    let total = 1 ;
    for(let i = 0 ; i < arr.length ; i++){
        total *= arr[i]
    }; 
    return total;
}
console.log('product of an array : ', getProdunctOfArr(numbers))
// Total Word Length: Strings ke array me total kitne characters hain unka sum nikalo.
const getWordLength = (wordsArr) => {
    if (!Array.isArray(wordsArr) || wordsArr.length === 0) return 0;
    
    let totalCharacters = 0;
    for (let i = 0; i < wordsArr.length; i++) {
        totalCharacters += wordsArr[i].length;
    }
    return totalCharacters;
};

console.log("Total chars:", getWordLength(["MEHTAB", "ANSARI", "JS"]));

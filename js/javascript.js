//soal 1
const printNumbers = (input) => {
    if (!input && input !== 0) {
        return ''
    }
    input = input.toString()
    let arrInput = input.split('');
    let Result = ''
    arrInput.map(num => {
        Result += `${num}: `
        for (let i = 0; i < num; i++) {
            Result += num;
        }
        Result += '\n'
    })
    return Result;
}

console.log(printNumbers(123))
// soal 3
function isSubstring(string, substring) {
    for (let i = 0; i < string.length; i++) {
        const sliced = string.slice(i, i + substring.length);
        if (sliced === substring) {
            console.log(substring.length)
            return true;
        }
    }
    return false;
}

console.log(isSubstring('hello world', 'world'));
console.log(isSubstring('hello world', 'World'));
//soal 0
function printSign(n, sign = '*') {
    let res = ''
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            res += sign.repeat(n) + '\n'
        } else {
            res += sign + ' '.repeat(n-2) +sign + '\n'
        }
    }
    return res
}

console.log(printSign(5))
//soal 4
function Submission(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}

console.log(Submission([1,2,3],[1]))
//soal 5
function expl1(arr, index, offset) {
    if (0 > index + offset || arr.length < offset + index +1) {
        return console.error("Invalid array")
    } const arr2 = arr.splice(index,1)[0]
    arr.splice(index+offset,0,arr2)
    return arr
}

console.log(expl1([1, 2, 3, 4], 2, 0))

//soal 2
function rec(str){
    return str ? rec(str.substr(1)) + str[0] : str
}

console.log(rec("abcd"))

// soal 6

function sortStr(str) {
    let result = ''
    for (let i = 0; str.length > i; i++) {
        if (str.substring(i, i + 1) !== str.substring(i + 1, i + 2)) {
            result += str.substring(i, i + 1)
        }
    }  return result

}

console.log(sortStr('aabbfvv'))
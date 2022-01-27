//1.Unique
let arr1 = [6, 1, 2, 6, 2, 2, 5, 8, 1]

function unique(arr) {
    return [...new Set(arr)]
}

console.log(unique(arr1))


//2.Intersection
let arr2 = [1, 2, 1]
let arr3 = [2, 3]

function intersection(arr1, arr2) {
    let a = [...new Set(arr1)].concat([...new Set(arr2)])
    return a.filter((item, index) => a.indexOf(item) !== index)
}

console.log(intersection(arr2, arr3))

//3.IsEmptyDeep
let obj1 = {}
let obj2 = {
    a: null,
    b: 'hello'
}
let obj3 = {
    a: {
        b: []
    }
}
let obj4 ={
    a: {
        b: undefined
    }
}

function isDeepEmpty(obj) {
    for (let key in obj) {
        //if the value is 'object'
        if (obj[key] instanceof Object) {
            if (isDeepEmpty(obj[key]) === false) return false
        }
        //if value is array
        else if (obj[key] instanceof Array) {
            //if array or string have length is not 0.
            if (obj[key].length !== 0) return false
        } else {
            // string/NaN/null/undefined
            if (obj[key]) return false
        }
    }
    return true
}

console.log(isDeepEmpty(obj1))
console.log(isDeepEmpty(obj2))
console.log(isDeepEmpty(obj3))
console.log(isDeepEmpty(obj4))
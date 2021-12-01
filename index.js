const evaluate = function(collection) {
    return (collection instanceof Array) ? collection.slice(): Object.values(collection) 
}


function myEach(collection, callback) {
    let newCollection = evaluate(collection)
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
    //newCollection.forEach((collection, callback) => callback(collection, callback))
}

function myMap(collection, callback) {
    collection = evaluate(collection)
    let newCollection = []
    for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]))
    }
   return newCollection
}
//return a new array of values and perfoems an opperation on those values and returns the new value

function myReduce(collection, callback, acc) {
    let newCollection = evaluate(collection)
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate) {
    let newCollection = evaluate(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) == true) {
        return newCollection[i]
    } }
    return undefined
}

function myFilter(collection, predicate) {
    let emptyArr = []
    let newCollection = evaluate(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) emptyArr.push(newCollection[i])
    }
     return emptyArr
}

function mySize (collection) {
    let newCollection = evaluate(collection)
// for (let i = 0; i < newCollection.length; i++) {
//     newCollection.parseint()
// }
    return newCollection.length 
}

function myFirst(array, [n]){
    let newCollection = evaluate(collection)
    for (let i = 0; i < array.length; i++) {
        array(newCollection[i])
    }
    return array.slice([n])
}
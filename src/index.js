
var nums = [1,3,6,7,8,9,12,62,23,-12,-98]


const _ = require('lodash')
const variance = require('simple-statistics')
const number = require('./number')
const string = require('./string')
//const = var
const area = require('./function')
const stats = require('simple-statistics')




console.log(area(10,70))
console.log(number)
console.log(string)
// console.log(stats)

console.log(stats.min(nums))
console.log(variance.variance(nums))

console.log(_.take(nums,5))
console.log(_.shuffle(nums))
console.log(_.sample(nums))

//lodash
//take
//shuffle
//sample
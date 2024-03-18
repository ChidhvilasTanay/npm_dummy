const _ = require('lodash')

const items = [1,[2,3,4],5,[7,8],6]

const new_items = _.flattenDeep(items)
console.log(new_items)
const assert = require('assert');

// basic asser
const value = 14
assert.strictEqual(value, 14, "Value should be 14")


// truth assert
const truth= true;
assert.ok(truth, "Value should be true")

//test deep equality assert
const obj1 = {name: "John", age: 30};
const obj2 = {name: "John", age: 30};

assert.deepStrictEqual(obj1, obj2, "Objects should be deeply equal")
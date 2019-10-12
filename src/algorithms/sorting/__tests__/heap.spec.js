'use strict'
exports.__esModule = true
var heap_1 = require('../heap')
describe('bubble sort', function() {
  it('should return a sorted array', function() {
    var inputArr = [1, 5, 2, 3, 4]
    var expectedArr = [5, 4, 3, 2, 1]
    expect(heap_1['default'](inputArr)).toMatchObject(expectedArr)
  })
})

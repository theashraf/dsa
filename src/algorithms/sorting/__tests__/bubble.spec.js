'use strict'
exports.__esModule = true
var bubble_1 = require('../bubble')
describe('bubble sort', function() {
  it('should return a sorted array', function() {
    var inputArr = [1, 5, 2, 3, 4]
    var expectedArr = [1, 2, 3, 4, 5]
    expect(bubble_1['default'](inputArr)).toMatchObject(expectedArr)
  })
})

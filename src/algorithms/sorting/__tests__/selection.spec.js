'use strict'
exports.__esModule = true
var selection_1 = require('../selection')
describe('bubble sort', function() {
  it('should return a sorted array', function() {
    var inputArr = [1, 5, 2, 3, 4]
    var expectedArr = [1, 2, 3, 4, 5]
    expect(selection_1['default'](inputArr)).toMatchObject(expectedArr)
  })
})

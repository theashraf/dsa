import { ArrayStack } from '..'

let stack: Stack<number>

describe('ArrayStack', () => {
  it('should throw error if stack created with zero size', () => {
    expect(() => {
      stack = new ArrayStack(0)
    }).toThrowError(/error/i)
  })

  it('should throw error if stack created with -ve size', () => {
    expect(() => {
      stack = new ArrayStack(-1)
    }).toThrowError(/error/i)
  })

  it('should throw error on .pop() while stack is empty', () => {
    stack = new ArrayStack(2)

    expect(() => {
      stack.pop()
    }).toThrowError(/error/i)
  })

  it('should throw error on .push() while stack is full', () => {
    stack = new ArrayStack(2)
    stack.push(1)
    stack.push(2)

    expect(() => {
      stack.push(3)
    }).toThrowError(/error/i)
  })

  it('should throw error on .top() while stack is empty', () => {
    stack = new ArrayStack(2)

    expect(() => {
      stack.pop()
    }).toThrowError(/error/i)
  })

  it('should have a size of zero when stack is empty', () => {
    stack = new ArrayStack(2)

    expect(stack.size()).toEqual(0)
  })

  it('.isEmpty() should return true when stack is empty', () => {
    stack = new ArrayStack(2)

    expect(stack.isEmpty()).toEqual(true)
  })

  it('.isEmpty() should return false when stack is not empty', () => {
    stack = new ArrayStack(2)
    stack.push(1)

    expect(stack.isEmpty()).toEqual(false)
  })

  it('.size() should return 5 if there are 5 elements in the stack', () => {
    stack = new ArrayStack(5)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)

    expect(stack.size()).toEqual(5)
  })

  it('.top() should return 2 if the last inserted element is 2', () => {
    stack = new ArrayStack(5)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(2)

    expect(stack.top()).toEqual(2)
  })

  it('.pop() should return 2 is the last inserted element is 2', () => {
    stack = new ArrayStack(5)

    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(2)

    expect(stack.pop()).toEqual(2)
  })

  it('.pop() should decrease the size', () => {
    stack = new ArrayStack(5)

    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)

    expect(stack.size()).toEqual(4)

    stack.pop()

    expect(stack.size()).toEqual(3)
  })

  it('.push() should add element to the end of the stack', () => {
    stack = new ArrayStack(5)

    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(5)

    expect(stack.top()).toEqual(5)
  })

  it('.push() should increase the size ', () => {
    stack = new ArrayStack(5)

    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(1)
    stack.push(3)

    expect(stack.size()).toEqual(5)
  })
})

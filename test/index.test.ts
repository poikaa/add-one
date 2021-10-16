import { addOne } from '../src'

describe('addOne', () => {
  it('Add one to 1', () => {
    expect(addOne(1)).toEqual(2)
  })

  it('Add one to 10', () => {
    expect(addOne(10)).toEqual(11)
  })

  it('Add one to -5', () => {
    expect(addOne(-5)).toEqual(-4)
  })
})

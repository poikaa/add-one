import { addThree } from '../src'

describe('addThree', () => {
  it('Add three to 1', () => {
    expect(addThree(1)).toEqual(4)
  })

  it('Add three to 10', () => {
    expect(addThree(10)).toEqual(13)
  })

  it('Add three to -5', () => {
    expect(addThree(-5)).toEqual(-2)
  })
})

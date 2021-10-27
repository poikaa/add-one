import { addTwo } from '../src'

describe('addTwo', () => {
  it('Add two to 1', () => {
    expect(addTwo(1)).toEqual(3)
  })

  it('Add two to 10', () => {
    expect(addTwo(10)).toEqual(12)
  })

  it('Add two to -5', () => {
    expect(addTwo(-5)).toEqual(-3)
  })
})

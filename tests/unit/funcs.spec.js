import { equalsLogic } from "../../src/helpers";



describe('Test equalsLogic func', () => {

  it('should return 5 with param ["2","+","3"]', () => {
    expect(equalsLogic(["2", "+", "3", "+", "10", "-", "3"])).toBe(12);
  })
})
const test = (a, b) => a + b;
describe('test', () => {
  it('is test', () => {
    expect(test(3, 4)).toBe(7);
  });
});

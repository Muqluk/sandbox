describe('install verification', () => {
  let expected: string | number;
  let actual: string | number;
  it('runs a test', () => {
    expected = 1;
    actual = 1;
    expect(expected).toBe(actual);
  });
  it('runs another test', () => {
    expected = '1';
    actual = 1;
    expect(expected).not.toBe(actual);
  });
  it('runs another test', () => {
    expected = '2';
    actual = 2;
    expect(expected).toBe(actual);
  });
});

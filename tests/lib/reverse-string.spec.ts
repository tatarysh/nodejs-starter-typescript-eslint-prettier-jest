import reverseString from '../../src/lib/reverse-string';

describe('reverse string tests', () => {
  test("reverse 'Hello World!'", () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
  });
});

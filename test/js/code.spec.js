import expect from 'expect';

import sum from '../../app/ui/js/sum';

describe('sum function', () => {
  it('should add a + b', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
});

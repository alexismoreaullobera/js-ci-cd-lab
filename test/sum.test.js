const { sum } = require('../src/sum');

test('additionne correctement deux nombres', () => {
    expect(sum(2, 3)).toBe(5);
});

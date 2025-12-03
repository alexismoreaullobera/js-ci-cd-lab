const { sum } = require('../public/js/sum');

test('additionne correctement deux nombres', () => {
    expect(sum(2, 3)).toBe(5);
});

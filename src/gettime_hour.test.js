const gettime_hour = require('./gettime_hour');
test('gettime_hour return -9', () => {
    expect(gettime_hour()).toBe(-9);
});


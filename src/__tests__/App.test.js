// USEFUL LINKS
// https://facebook.github.io/jest/
// https://github.com/ironprice91/countdown-timer#running-tests

// example test
test("adds 1 + 2 to equal 3", () => {
	function sum(a, b) {
		return a + b;
	}
	expect(sum(1,2)).toBe(3);
});
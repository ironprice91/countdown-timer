// USEFUL LINKS
// https://facebook.github.io/jest/
// https://github.com/ironprice91/countdown-timer#running-tests
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// example test
test("adds 1 + 2 to equal 3", () => {
	function sum(a, b) {
		return a + b;
	}
	expect(sum(1,2)).toBe(3);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

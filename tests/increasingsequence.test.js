import IncreasingSubArrayRunner from "../index.js";

describe('Testing application for inputs', () => {
    it('Test Case 01', () => {
        expect(IncreasingSubArrayRunner('6 1 5 9 2')).toBe('1 5 9');
    });
    it('Test Case 10', () => {
        expect(IncreasingSubArrayRunner('6 2 4 6 1 5 9 2')).toBe('2 4 6');
    });
    it('Test Case 11', () => {
        expect(IncreasingSubArrayRunner('6 2 4 3 1 5 9')).toBe('1 5 9');
    });
})
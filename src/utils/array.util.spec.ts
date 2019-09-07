import { ArrayUtil } from './array.util';

describe('ArrayUtil', () => {
    describe('random', () => {
        it('should return undefined when array is undefined', () => {
            const randomElement = ArrayUtil.random(undefined);
            expect(randomElement).toBeUndefined();
        });

        it('should return undefined when array is empty', () => {
            const randomElement = ArrayUtil.random([]);
            expect(randomElement).toBeUndefined();
        });

        it('should return a random string when array is defined', () => {
            spyOn(Math, 'floor').and.returnValue(0);
            const randomElement = ArrayUtil.random(['a', 'b']);
            expect(randomElement).toBeDefined();
            expect(randomElement).toBe('a');
        });
    });
});

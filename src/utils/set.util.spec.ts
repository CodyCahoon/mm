import { SetUtil } from './set.util';

describe('SetUtil', () => {
    describe('removeBy', () => {
        it('should return a set with the element removed', () => {
            const set = new Set([{ id: '1' }, { id: '2' }]);
            const newSet = SetUtil.removeBy(set, 'id', '1');
            expect(newSet.size).toBe(1);
        });
    });
});

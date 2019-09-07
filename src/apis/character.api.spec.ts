import { CharacterAPI } from './character.api';

describe('CharacterAPI', () => {
    it('should create a new character', () => {
        const character = CharacterAPI.init('Test');

        expect(character.name).toBe('Test');
        expect(character.relationships).toEqual(new Set());
    });
});

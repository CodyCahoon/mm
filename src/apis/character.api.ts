import { Character } from '../types';
import { IdUtil } from '../utils/id.util';

export namespace CharacterAPI {
    export function init(): Character {
        return {
            id: IdUtil.generateUUID(),
            clues: [],
            isMurderer: false,
            name: '',
            relationships: new Set(),
        };
    }
}

import { IdUtil } from '../utils/id.util';

export namespace CharacterAPI {
    export interface Character {
        id: string;

        name: string;
        // @todo - sex: Sex;
        // @todo - description: string;
        // @todo - job: Job;
        // @todo - image: string;
    }

    export function init(name: string): Character {
        return {
            id: IdUtil.generateUUID(),
            name,
        };
    }

    export function toString(character?: Character): string {
        if (!character) {
            return 'Character\tundefined';
        }
        return `Character\t${character.name}`;
    }
}

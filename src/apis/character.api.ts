import { IdUtil } from '../utils/id.util';
import { RelationshipAPI } from './relationship.api';

export namespace CharacterAPI {
    export interface Character {
        id: string;

        name: string;
        relationships: Set<RelationshipAPI.Relationship>;
        // todo - age: number
        // todo - sex: Sex;
        // todo - description: string;
        // todo - job: Job;
        // todo - image: string;
    }

    export function init(name: string): Character {
        return {
            id: IdUtil.generateUUID(),
            name,
            relationships: new Set(),
        };
    }

    export function toString(character?: Character): string {
        if (!character) {
            return 'Character\tundefined';
        }

        const { name, relationships } = character;
        return ['Character\t' + name]
            .concat(Array.from(relationships).map((r: RelationshipAPI.Relationship) => RelationshipAPI.toString(r)))
            .join('\n');
    }
}

import { IdUtil } from '../utils/id.util';
import { CharacterAPI } from './character.api';

export namespace RelationshipAPI {
    export interface Relationship {
        id: string;
        character: CharacterAPI.Character;
        type: RelationshipType;
    }

    export enum FamilyRelationshipType {
        Child = 'Child',
        Parent = 'Parent',
        Sibling = 'Sibling',
        Spouse = 'Spouse',
    }

    export enum FriendRelationshipType {
        Classmate = 'Classmate',
        Colleague = 'Colleague',
        Neighbor = 'Neighbor',
    }

    export type RelationshipType = FamilyRelationshipType | FriendRelationshipType;

    export function init(character: CharacterAPI.Character, type: RelationshipType): Relationship {
        return {
            id: IdUtil.generateUUID(),
            character,
            type,
        };
    }

    export function toString(relationship: Relationship): string {
        const { type, character } = relationship;
        return `Relationship\t${type} to ${character.name}`;
    }
}

import { IdUtil } from '../utils/id.util';
import { CharacterAPI } from './character.api';

export namespace RelationshipAPI {
    export interface Relationship {
        id: string;
        character: CharacterAPI.Character;
        relation: Relation;
    }

    export interface Relation {
        timeline: RelationTimeline;
        type: RelationType;
    }

    export enum RelationTimeline {
        Current = 'Currently',
        Future = 'In the Future',
        Past = 'In the Past',
    }

    export enum FamilyRelationType {
        Child = 'Child',
        Parent = 'Parent',
        Sibling = 'Sibling',
        Spouse = 'Spouse',
    }

    export enum FriendRelationType {
        Classmate = 'Classmate',
        Colleague = 'Colleague',
        Neighbor = 'Neighbor',
    }

    export type RelationType = FamilyRelationType | FriendRelationType;

    const { Current, Future, Past } = RelationTimeline;
    const { Child, Parent, Sibling, Spouse } = FamilyRelationType;
    const { Classmate, Colleague, Neighbor } = FriendRelationType;

    export const availableRelations: Relation[] = [
        // Family - Spouse
        { type: Spouse, timeline: Current },
        // Family - Sibling
        { type: Sibling, timeline: Current },

        // Family - Parent
        { type: Parent, timeline: Current },

        // Family - Child
        { type: Child, timeline: Current },

        // Friend - Neighbor
        { type: Neighbor, timeline: Current },

        // Friend - Colleague
        { type: Colleague, timeline: Current },

        // Friend - Classmate
        { type: Classmate, timeline: Current },
    ];

    export function init(character: CharacterAPI.Character, relation: Relation): Relationship {
        return {
            id: IdUtil.generateUUID(),
            character,
            relation,
        };
    }

    export function toString(relationship: Relationship): string {
        const { relation, character } = relationship;
        const { type, timeline } = relation;
        return `Relationship\t${timeline} ${type} to ${character.name}`;
    }
}

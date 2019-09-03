import { Character } from './character';

export interface Relationship {
    id: string;

    character: Character;
    timeline: RelationshipTimeline;
    type: FamilyRelationshipType | FriendRelationshipType;
}

export enum RelationshipTimeline {
    Current,
    Future,
    Past,
}

export enum FamilyRelationshipType {
    Child,
    Parent,
    Sibling,
    Spouse,
}

export enum FriendRelationshipType {
    School,
    Work,
    Neighbor,
}

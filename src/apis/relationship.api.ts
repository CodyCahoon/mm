import { IdUtil } from '../utils/id.util';

export namespace RelationshipAPI {
    export interface Relationship {
        id: string;
        player1Id: string;
        player2Id: string;

        timeline: RelationshipTimeline;
        type: RelationshipType;
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

    export type RelationshipType = FamilyRelationshipType | FriendRelationshipType;

    export function init(
        player1Id: string,
        player2Id: string,
        timeline: RelationshipTimeline,
        type: RelationshipType,
    ): Relationship | null {
        return {
            id: IdUtil.generateUUID(),
            player1Id,
            player2Id,
            timeline,
            type,
        };
    }
}

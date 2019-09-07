import { IdUtil } from '../utils/id.util';
import { CharacterAPI } from './character.api';
import { PlayerAPI } from './player.api';
import { SetUtil } from '../utils/set.util';
import { RelationshipAPI } from './relationship.api';

export namespace GameAPI {
    export interface Game {
        id: string;

        players: Set<PlayerAPI.Player>;
        theme: GameTheme;

        unassignedCharacters: Set<CharacterAPI.Character>;
        unassignedRelationshipTypes: Set<RelationshipAPI.RelationshipType>;
    }

    export enum GameTheme {
        Western = 'A Wild West',
    }

    export const availableCharactersByTheme: Record<GameTheme, () => Set<CharacterAPI.Character>> = {
        [GameTheme.Western]: () =>
            new Set([
                CharacterAPI.init('Western Character #1'),
                CharacterAPI.init('Western Character #2'),
                CharacterAPI.init('Western Character #3'),
                CharacterAPI.init('Western Character #4'),
                CharacterAPI.init('Western Character #5'),
                CharacterAPI.init('Western Character #6'),
                CharacterAPI.init('Western Character #7'),
            ]),
    };

    export const availableRelationshipTypesByTheme: Record<GameTheme, () => Set<RelationshipAPI.RelationshipType>> = {
        [GameTheme.Western]: () =>
            new Set([
                // Family
                RelationshipAPI.FamilyRelationshipType.Child,
                RelationshipAPI.FamilyRelationshipType.Parent,
                RelationshipAPI.FamilyRelationshipType.Parent,
                RelationshipAPI.FamilyRelationshipType.Sibling,
                RelationshipAPI.FamilyRelationshipType.Spouse,

                // Friend
                RelationshipAPI.FriendRelationshipType.Classmate,
                RelationshipAPI.FriendRelationshipType.Colleague,
                RelationshipAPI.FriendRelationshipType.Neighbor,
            ]),
    };

    export function init(theme: GameTheme): Game {
        return {
            id: IdUtil.generateUUID(),
            players: new Set(),
            theme,
            unassignedCharacters: GameAPI.availableCharactersByTheme[theme](),
            unassignedRelationshipTypes: GameAPI.availableRelationshipTypesByTheme[theme](),
        };
    }

    export function selectRandomCharacter(game: Game): CharacterAPI.Character {
        return SetUtil.randomAndRemove(game.unassignedCharacters);
    }

    export function selectRandomRelationshipType(game: Game): RelationshipAPI.RelationshipType {
        return SetUtil.randomAndRemove(game.unassignedRelationshipTypes);
    }

    export function toString(game: Game): string {
        const playersAsArray = Array.from(game.players);

        const players = playersAsArray.reduce((players: string, p: PlayerAPI.Player) => {
            return players.concat(PlayerAPI.toString(p) + '\n');
        }, '');

        const murdererCount = playersAsArray.filter((p) => p.type === PlayerAPI.PlayerType.Murderer).length;

        return [
            '=====================================================',
            '[Game]\n',
            'Game Theme\t' + game.theme,
            'Players\t\t' + playersAsArray.length,
            'Murderers\t' + murdererCount,
            '=====================================================',
            '[Players]',
            players,
        ].join('\n');
    }
}

import { CharacterAPI } from './character.api';
import { IdUtil } from '../utils/id.util';
import { RelationshipAPI } from './relationship.api';

export namespace PlayerAPI {
    export interface Player {
        id: string;

        character?: CharacterAPI.Character;
        name?: string;
        type: PlayerType;
    }

    export enum PlayerType {
        Murderer = 'Murderer',
        NonMurderer = 'Non-Murderer',
        Unknown = 'Unknown',
    }

    export function init(): Player {
        return {
            id: IdUtil.generateUUID(),
            type: PlayerType.Unknown,
        };
    }

    export function initMany(playerCount: number): Player[] {
        const players = [] as Player[];
        for (let i = 0; i < playerCount; i++) {
            const newPlayer = init();
            players.push(newPlayer);
        }
        return players;
    }

    export function toString(player: Player): string {
        return ['', 'Player\t\t' + player.name + ' - ' + player.type, CharacterAPI.toString(player.character)].join(
            '\n',
        );
    }
}

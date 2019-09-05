import { CharacterAPI } from './character.api';
import { IdUtil } from '../utils/id.util';

export namespace PlayerAPI {
    export interface Player {
        id: string;

        character?: CharacterAPI.Character;
        type: PlayerType;
        name?: string;
    }

    export enum PlayerType {
        Murderer = 'Murderer',
        NonMurderer = 'NonMurderer',
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
        return [
            '',
            'Player\t\t' + player.name,
            'PlayerType\t' + player.type,
            CharacterAPI.toString(player.character),
        ].join('\n');
    }
}

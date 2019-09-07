import { CharacterAPI } from './character.api';
import { IdUtil } from '../utils/id.util';

export namespace PlayerAPI {
    export interface Player {
        id: string;

        character: CharacterAPI.Character;
        name: string;
        type: PlayerType;
    }

    export enum PlayerType {
        Murderer = 'Murderer',
        NonMurderer = 'Non-Murderer',
    }

    export function init(): Player {
        return {
            id: IdUtil.generateUUID(),
            character: CharacterAPI.init(''),
            name: '',
            type: PlayerType.NonMurderer,
        };
    }

    export function initMany(playerCount: number): Set<Player> {
        const players = new Set<Player>();
        for (let i = 0; i < playerCount; i++) {
            const newPlayer = init();
            players.add(newPlayer);
        }
        return players;
    }

    export function toString(player: Player): string {
        return ['', 'Player\t\t' + player.name + ' - ' + player.type, CharacterAPI.toString(player.character)].join(
            '\n',
        );
    }
}

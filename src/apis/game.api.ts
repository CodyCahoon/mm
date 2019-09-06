import { IdUtil } from '../utils/id.util';
import { CharacterAPI } from './character.api';
import { PlayerAPI } from './player.api';

export namespace GameAPI {
    export interface Game {
        id: string;

        players: PlayerAPI.Player[];
        theme: GameTheme;
    }

    export enum GameTheme {
        Western = 'A Wild West',
    }

    export const availableCharactersByTheme: Record<GameTheme, CharacterAPI.Character[]> = {
        [GameTheme.Western]: [
            CharacterAPI.init('Western Character #1'),
            CharacterAPI.init('Western Character #2'),
            CharacterAPI.init('Western Character #3'),
            CharacterAPI.init('Western Character #4'),
            CharacterAPI.init('Western Character #5'),
            CharacterAPI.init('Western Character #6'),
            CharacterAPI.init('Western Character #7'),
        ],
    };

    export function init(theme: GameTheme): Game {
        return {
            id: IdUtil.generateUUID(),
            players: [],
            theme,
        };
    }

    export function toString(game: Game): string {
        const players = game.players.reduce((players: string, p: PlayerAPI.Player) => {
            return players.concat(PlayerAPI.toString(p) + '\n');
        }, '');

        const murdererCount = game.players.filter((p) => p.type === PlayerAPI.PlayerType.Murderer).length;

        return [
            '=====================================================',
            '[Game]\n',
            'Game Theme\t' + game.theme,
            'Players\t\t' + game.players.length,
            'Murderers\t' + murdererCount,
            '=====================================================',
            '[Players]',
            players,
        ].join('\n');
    }
}

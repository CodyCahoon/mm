import { Character, Game, GameTheme } from '../types';
import { IdUtil } from '../utils/id.util';
import { CharacterAPI } from './character.api';

export namespace GameAPI {
    export function init(theme: GameTheme): Game {
        return {
            id: IdUtil.generateUUID(),
            characters: new Set(),
            murderers: new Set(),
            theme,
        };
    }

    export function initCharactersForGame(
        game: Game,
        characterCount: number,
    ): Game {
        const initCharacters = (): Set<Character> => {
            const characters = new Set<Character>();
            for (let i = 0; i < characterCount; i++) {
                characters.add(CharacterAPI.init());
            }
            return characters;
        };

        const gameCopy = Object.assign({}, game) as Game;
        gameCopy.characters = initCharacters();
        return gameCopy;
    }
}

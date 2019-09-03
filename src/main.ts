import * as readline from 'readline';
import { GameAPI } from './apis/game.api';
import { GameTheme } from './types';

function main(): void {
    // todo - @prompt - Select theme
    const theme = GameTheme.Western;
    let game = GameAPI.init(theme);

    // todo - @prompt - Choose number of characters
    const characterCount = 4;
    game = GameAPI.initCharactersForGame(game, characterCount);

    // todo - @prompt? - Select difficulty (default is Moderate, [Easy, Moderate, Sherlock])
    // todo - @prompt - Users select their characters

    // todo - Generate relationships based off character selections
}

main();

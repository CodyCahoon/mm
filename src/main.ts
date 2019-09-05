import { GameAPI } from './apis/game.api';
import { PlayerAPI } from './apis/player.api';

function main(): void {
    // todo - @prompt - Select theme for game
    const theme = GameAPI.GameTheme.Western;
    const game = GameAPI.init(theme);

    // todo - @prompt - Choose number of players participating in the game
    const playerCount = 4;
    const players = PlayerAPI.initMany(playerCount);

    // todo - @prompt - Players enter their own name
    players[0].name = 'Player #1';
    players[1].name = 'Player #2';
    players[2].name = 'Player #3';
    players[3].name = 'Player #4';

    // todo - @prompt? - Select difficulty (default is Moderate, [Easy, Moderate, Sherlock])

    // todo - @prompt - Players select their characters (or allow random selection for player)
    const availableCharacters = GameAPI.themeAvailableCharacters[theme];
    players[0].character = availableCharacters[0];
    players[1].character = availableCharacters[1];
    players[2].character = availableCharacters[2];
    players[3].character = availableCharacters[3];

    game.players = players;

    console.log(GameAPI.toString(game));

    // todo - Generate relationships to murderer based off character selections
}

main();

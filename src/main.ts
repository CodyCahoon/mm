import { GameAPI } from './apis/game.api';
import { PlayerAPI } from './apis/player.api';
import { RelationshipAPI } from './apis/relationship.api';
import { SetUtil } from './utils/set.util';

function generateGame(): GameAPI.Game {
    // todo - @prompt - Select theme for game
    const theme = GameAPI.GameTheme.Western;
    const game = GameAPI.init(theme);

    // todo - @prompt - Choose number of players participating in the game
    const playerCount = 4;
    game.players = PlayerAPI.initMany(playerCount);

    // todo - @prompt - Players enter their own name
    // todo - @prompt - Players select their characters (or allow random selection for player)
    let playerNumber = 1;
    game.players.forEach((player: PlayerAPI.Player) => {
        player.name = 'Player #' + playerNumber++;
        player.character = GameAPI.selectRandomCharacter(game);
    });

    // Randomly assign murdered character
    const murderedCharacter = GameAPI.selectRandomCharacter(game);

    // Generate relationships to murdered character
    game.players.forEach((player: PlayerAPI.Player) => {
        const { character } = player;
        const relationshipType = GameAPI.selectRandomRelationshipType(game);
        const relationshipToMurderededCharacter = RelationshipAPI.init(murderedCharacter, relationshipType);
        character.relationships.add(relationshipToMurderededCharacter);
    });

    // Randomly select murderer
    const murderer = SetUtil.random(game.players);
    murderer.type = PlayerAPI.PlayerType.Murderer;

    // todo - Assign first round objectives
    // todo - Assign first round clues

    return game;
}

const game = generateGame();
console.log(GameAPI.toString(game));

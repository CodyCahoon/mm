import { GameAPI } from './apis/game.api';
import { PlayerAPI } from './apis/player.api';
import { RelationshipAPI } from './apis/relationship.api';
import { ArrayUtil } from './utils/array.util';

function generateGame(): GameAPI.Game {
    // todo - @prompt - Select theme for game
    const theme = GameAPI.GameTheme.Western;
    const game = GameAPI.init(theme);

    // todo - @prompt - Choose number of players participating in the game
    const playerCount = 4;
    const players: PlayerAPI.Player[] = PlayerAPI.initMany(playerCount);

    // todo - @prompt - Players enter their own name
    players[0].name = 'Player #1';
    players[1].name = 'Player #2';
    players[2].name = 'Player #3';
    players[3].name = 'Player #4';

    // todo - @prompt? - Select difficulty

    // todo - @prompt - Players select their characters (or allow random selection for player)
    const availableCharacters = GameAPI.availableCharactersByTheme[theme];
    players[0].character = availableCharacters[0];
    players[1].character = availableCharacters[1];
    players[2].character = availableCharacters[2];
    players[3].character = availableCharacters[3];
    game.players = players;

    // todo - Select random murderee
    const murderee = availableCharacters[4];

    // todo - Generate relationships to murderer based off character selections
    const availableRelations = RelationshipAPI.availableRelations;
    for (let player of players) {
        if (!player.character) {
            continue;
        }

        const { character } = player;

        // todo - prevent conflicting relations
        // 1. more than 2 parents
        // 2. more than 1 spouse
        const relation = ArrayUtil.random(availableRelations);
        if (!relation) {
            continue;
        }
        const relationshipToMurderee = RelationshipAPI.init(murderee, relation);
        const relationshipToPlayer = RelationshipAPI.init(character, relation);

        character.relationships.add(relationshipToMurderee);
        murderee.relationships.add(relationshipToPlayer);
    }

    // todo - pick murderer (one for now)
    const murderer = ArrayUtil.random(game.players);
    if (!murderer) {
        return game;
    }
    game.players.forEach((p) => (p.type = PlayerAPI.PlayerType.NonMurderer));
    murderer.type = PlayerAPI.PlayerType.Murderer;

    return game;
}

const game = generateGame();
console.log(GameAPI.toString(game));

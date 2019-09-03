import { Character } from './character';

export interface Game {
    id: string;

    theme: GameTheme;
    characters: Set<Character>;
    murderers: Set<Character>;
}

export enum GameTheme {
    Western = 'A Wild West',
    Space = 'A Safe Space',
}

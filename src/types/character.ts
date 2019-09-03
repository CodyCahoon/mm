import { Clue } from './clue';
import { Relationship } from './relationship';

export interface Character {
    id: string;

    clues: Clue[];
    relationships: Set<Relationship>;
    isMurderer: boolean;
    name: string;
}

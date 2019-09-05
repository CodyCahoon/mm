import { IdUtil } from '../utils/id.util';

export namespace ClueAPI {
    export interface Clue {
        id: string;

        hasBeenRead: boolean;
        isLocked: boolean;
        message: string;
        title: string;
    }

    export function init(title: string, message: string): Clue {
        return {
            id: IdUtil.generateUUID(),
            hasBeenRead: false,
            isLocked: false,
            message,
            title,
        };
    }
}

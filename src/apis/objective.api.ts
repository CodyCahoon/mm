import { IdUtil } from '../utils/id.util';

export namespace ObjectiveAPI {
    export interface Objective {
        id: string;

        description: string;
        isComplete: boolean;
    }

    export function init(description: string): Objective {
        return {
            id: IdUtil.generateUUID(),
            description,
            isComplete: false,
        };
    }
}

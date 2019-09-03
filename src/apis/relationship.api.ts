import { Relationship } from '../types';
import { IdUtil } from '../utils/id.util';

export namespace RelationshipAPI {
    export function init(): Relationship | null {
        const id = IdUtil.generateUUID();
        return null;
    }
}

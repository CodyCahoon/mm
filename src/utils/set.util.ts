export namespace SetUtil {
    export function random<T>(set: Set<T>): T {
        const randomIndex = Math.floor(Math.random() * set.size);
        return Array.from(set)[randomIndex];
    }

    export function randomAndRemove<T>(set: Set<T>): T {
        const randomItem = SetUtil.random(set);
        set.delete(randomItem);
        return randomItem;
    }

    // @deprecated - unused, but neat
    export function removeBy<T extends object>(set: Set<T>, key: keyof T, value: T[keyof T]): Set<T> {
        const setAsArray = Array.from(set);
        const item = setAsArray.find((t: T) => t[key] === value);
        if (item) {
            set.delete(item);
        }
        return set;
    }
}

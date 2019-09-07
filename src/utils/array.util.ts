export namespace ArrayUtil {
    export function random<T>(arr: T[] = []): T | undefined {
        if (!arr || arr.length === 0) {
            return undefined;
        }

        const arrLength = arr.length;
        const randomIndex = Math.floor(Math.random() * arrLength);
        return arr[randomIndex];
    }
}

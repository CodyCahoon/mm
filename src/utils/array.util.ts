export namespace ArrayUtil {
    export function random<T>(arr: T[] = []): T {
        const arrLength = arr.length;
        const randomIndex = Math.floor(Math.random() * arrLength);
        return arr[randomIndex];
    }
}

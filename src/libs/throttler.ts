// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => ReturnType<T> | undefined {
    let isThrottled = false;
    let savedArgs: Parameters<T> | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let savedContext: any = null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
        if (isThrottled) {
          savedArgs = args;
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          savedContext = this;
          return undefined;
        }

        const result = func.apply(this, args);
        isThrottled = true;

        setTimeout(() => {
          isThrottled = false;
          if (savedArgs !== null) {
            func.apply(savedContext, savedArgs);
            savedArgs = null;
            savedContext = null;
          }
        }, delay);

        return result;
    };
}
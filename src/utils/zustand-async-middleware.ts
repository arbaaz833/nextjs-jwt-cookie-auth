import { StateCreator } from 'zustand';

export const asyncTrackerMiddleware =
  <T extends object>(
    config: StateCreator<T>,
  ): StateCreator<T> =>
  (set, get, api) => {
    const trackAsync = <Fn extends (...args: any[]) => Promise<any>>(
      fn: Fn,
      name: string,
    ): Fn =>
      (async (...args: Parameters<Fn>) => {
        const loadingKey = `${name}Loading` as keyof T;

        set({ [loadingKey]: true } as Partial<T>);
        try {
          const result = await fn(...args);
          set({ [loadingKey]: false } as Partial<T>);
          return result;
        } catch (e) {
          set({ [loadingKey]: false } as Partial<T>);
          throw e;
        }
      }) as Fn;

    const store = config(set, get, api);

    // Wrap async functions automatically
    for (const key in store) {
      const fn = store[key as keyof T];
      if (typeof fn === 'function' && fn.constructor.name === 'AsyncFunction') {
        store[key as keyof T] = trackAsync(
          fn as any,
          key,
        ) as T[keyof T];
        // Also init a loading flag
        const loadingKey = `${key}Loading` as keyof T;
        if (!(loadingKey in store)) {
          (store as any)[loadingKey] = false;
        }
      }
    }

    return store;
  };

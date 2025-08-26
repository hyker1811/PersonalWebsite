import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export enum Theme {
  DARK = 'dark-theme',
  LIGHT = 'light-theme',
}

export const ThemeStore = signalStore(
  { providedIn: 'root' },
  withState({ theme: Theme.DARK }),
  withMethods((store) => ({
    switchBetweenDarkAndLight(): void {
      switch (store.theme()) {
        case Theme.LIGHT:
          return patchState(store, { theme: Theme.DARK });
        case Theme.DARK:
          return patchState(store, { theme: Theme.LIGHT });
        default:
          return patchState(store, { theme: Theme.LIGHT });
      }
    },
  }))
);

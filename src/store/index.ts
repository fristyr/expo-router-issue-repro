import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLanguageSlice} from './slices/language-slice/language-slice';
import {ILanguageSlice} from './slices/language-slice/language-slice.types';
import {IAppSlice} from './slices/app-slice/app-slice.types';
import {createAppSlice} from './slices/app-slice/app-slice';
import {createSelectorHooks, ZustandHookSelectors} from './helpers/createSelectorHooks';
import {IUserSlice} from './slices/user-slice/app-slice.types';
import {createUserSlice} from './slices/user-slice/user-slice';

// Add more slices here
// Example ILanguageSlice & IBearSlices & IUSerSlices ...etc
type TState = ILanguageSlice & IAppSlice & IUserSlice;

export const useBaseStore = create<TState>()(
  devtools(
    persist(
      (...a) => ({
        //@ts-ignore
        ...createLanguageSlice(...a),
        //@ts-ignore
        ...createAppSlice(...a),
        //@ts-ignore
        ...createUserSlice(...a),
      }),
      {
        name: 'store',
        version: 1,
        getStorage: () => AsyncStorage,
        partialize: state => {
          // Place here more variables you want to avoid from persistant storage
          const {hasHydrated, isSignedIn} = state;

          const state_entries = Object.entries(state);
          const filtered_entries = state_entries.filter(
            // Do not save selected store values to the AsyncStorage + avoid saving there setState functions
            // Inside of AsyncStorage should be only state variables, not fucntions
            ([key]) => ![`${hasHydrated}`, `${isSignedIn}`].includes(key) && !key.startsWith('set'),
          );
          return Object.fromEntries(filtered_entries);
        },
        onRehydrateStorage: () => {
          console.log('hydration starts');
          // optional
          return (state, error) => {
            if (error) {
              console.log('an error happened during hydration', error);
            } else {
              console.log('hydration finished');
              state && state.setHasHydrated(true);
            }
          };
        },
      },
    ),
  ),
);

export const useStore = createSelectorHooks(useBaseStore) as typeof useBaseStore &
  ZustandHookSelectors<TState>;

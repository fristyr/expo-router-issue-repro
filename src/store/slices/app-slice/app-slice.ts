import {StateCreator} from 'zustand';
import {IAppSlice} from './app-slice.types';

export const createAppSlice: StateCreator<
  IAppSlice,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
> = (set, get, store) => ({
  hasHydrated: false,
  wizardCompleted: false,
  setHasHydrated: val => set({hasHydrated: val}),
});

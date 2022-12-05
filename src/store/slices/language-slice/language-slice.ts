import {StateCreator} from 'zustand';
import {ILanguageSlice} from './language-slice.types';

export const createLanguageSlice: StateCreator<
  ILanguageSlice,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
> = (set, get, store) => ({
  lang: 'en',
  setStoredLang: val => set({lang: val}),
});

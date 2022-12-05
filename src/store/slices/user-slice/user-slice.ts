import {StateCreator} from 'zustand';
import {IUserSlice} from './app-slice.types';

export const createUserSlice: StateCreator<
  IUserSlice,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
> = (set, get, store) => ({
  isSignedIn: false,
});

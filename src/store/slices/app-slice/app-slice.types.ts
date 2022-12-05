export interface IAppSlice {
    hasHydrated: boolean;
    wizardCompleted: boolean;
    setHasHydrated: (val: boolean) => void;
  }
export interface ILanguageSlice {
  lang: 'nl' | 'en';
  setStoredLang: (val: ILanguageSlice['lang']) => void;
}

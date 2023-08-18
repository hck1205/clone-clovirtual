import { atom, useAtomValue, useSetAtom } from 'jotai';

export const keywordFilterAtom = atom<string>('');
export const useKeywordFilterValue = () => useAtomValue(keywordFilterAtom);
export const useKeywordFilterWrite = () => useSetAtom(keywordFilterAtom);

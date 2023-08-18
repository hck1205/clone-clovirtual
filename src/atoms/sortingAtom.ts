import { atom, useAtomValue, useSetAtom } from 'jotai';

export const sortingAtom = atom<number>(0);
export const useSortingValue = () => useAtomValue(sortingAtom);
export const useSortingWrite = () => useSetAtom(sortingAtom);

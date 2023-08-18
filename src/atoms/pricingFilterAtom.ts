import { atom, useAtomValue, useSetAtom } from 'jotai';

export const pricingFilterAtom = atom<number[]>([]);
export const usePricingFilterValue = () => useAtomValue(pricingFilterAtom);
export const usePricingFilterWrite = () => useSetAtom(pricingFilterAtom);

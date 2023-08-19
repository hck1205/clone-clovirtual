import { PRICING_RANGES } from "@/constpack";
import { atom, useAtomValue, useSetAtom } from "jotai";

export const pricingRangeFilterAtom = atom<number[]>(PRICING_RANGES);
export const usePricingRangeFilterValue = () =>
  useAtomValue(pricingRangeFilterAtom);
export const usePricingRangeFilterWrite = () =>
  useSetAtom(pricingRangeFilterAtom);

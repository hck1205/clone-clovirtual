import { PricingOption } from '@/constpack';

const baseURL = import.meta.env.VITE_REQUEST_URL as string;

export type TStoreData = {
  id: string;
  creator: string;
  pricingOption: PricingOption;
  imagePath: string;
  price: number;
};

export const fetchStore = async (): Promise<TStoreData[]> => {
  const response = await fetch(`${baseURL}/api/data`);
  return (await response.json()) as TStoreData[];
};

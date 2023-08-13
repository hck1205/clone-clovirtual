import { useEffect, useState } from 'react';

import { type TStoreData, fetchStore } from '@/API';

export const useFetchStore = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [storeData, setStoreData] = useState<TStoreData[]>([]);

  useEffect(() => {
    const initData = async () => {
      const data = await fetchStore();
      setStoreData(data);
    };

    initData()
      .catch(console.error)
      .finally(() => setIsFetching(false));
  }, []);

  return { storeData, isFetching };
};

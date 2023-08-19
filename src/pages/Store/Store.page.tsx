import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useFetchStore } from "@/hook/useFetchStore";
import { Spinner } from "@/components";
import Item from "@/components/Item";
import Header from "@/components/Header";

import { useKeywordFilterValue } from "@/atoms/keywordFilterAtom";
import { usePricingFilterValue } from "@/atoms/pricingFilterAtom";

import { StorePageWrapper, GridWrapper } from "./Store.styled";
import { TStoreData } from "@/API";
import { hasKeyword } from "@/utils";
import { ITEMS_PER_PAGE, PricingOption } from "@/constpack";
import { useSortingValue } from "@/atoms/sortingAtom";
import { usePricingRangeFilterValue } from "@/atoms/pricingRangeFilterAtom";
import useUpdateQueryParams from "@/hook/useUpdateQueryParams";

function Store() {
  const { initFilter } = useUpdateQueryParams();
  const { storeData, isFetching } = useFetchStore();
  const [bottomRef, inView] = useInView();

  const keywordFilter = useKeywordFilterValue();
  const pricingFilter = usePricingFilterValue();
  const sortingValue = useSortingValue();
  const [minValue, maxValue] = usePricingRangeFilterValue();

  const [offset, setOffSet] = useState(1);

  useEffect(() => initFilter(), []);

  useEffect(() => {
    if (inView) {
      setOffSet((prev) => prev + 1);
    }
  }, [inView]);

  const filterByPricingOption = useCallback(
    ({ pricingOption }: TStoreData) => {
      return pricingFilter.length
        ? pricingFilter.indexOf(pricingOption) > -1
        : true;
    },
    [pricingFilter]
  );

  const filterByPricingRange = useCallback(
    ({ price }: TStoreData) => {
      const hasPaidFilter = pricingFilter.includes(PricingOption.PAID);
      return hasPaidFilter ? price >= minValue && price <= maxValue : true;
    },
    [minValue, maxValue]
  );

  const filterByKeyword = useCallback(
    ({ id, creator }: TStoreData) => {
      const includesKeyword = hasKeyword(keywordFilter);
      return keywordFilter
        ? includesKeyword(creator) || includesKeyword(id)
        : true;
    },
    [keywordFilter]
  );

  const sortByValue = useCallback(
    (nextData: TStoreData, prevData: TStoreData) => {
      if (sortingValue > 0) {
        // Handle free and view only data
        if ([1, 2].includes(prevData.pricingOption)) return -1;
        if ([1, 2].includes(nextData.pricingOption)) return 1;

        // Sort by price
        const isHigher = sortingValue === 1;
        return isHigher
          ? prevData.price - nextData.price
          : nextData.price - prevData.price;
      } else {
        // Sort by id
        if (nextData.id > prevData.id) return 1;
        if (nextData.id < prevData.id) return -1;
        if (nextData.id === prevData.id) return 0;
      }

      return 0;
    },
    [sortingValue]
  );

  return (
    <StorePageWrapper>
      <Header />

      {isFetching ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <GridWrapper>
          {storeData
            .filter(filterByPricingOption)
            .filter(filterByPricingRange)
            .filter(filterByKeyword)
            .filter((_data, index) => index < ITEMS_PER_PAGE * offset)
            .sort(sortByValue)
            .map((data) => (
              <Item key={data.id} itemData={data} />
            ))}

          <div ref={bottomRef} style={{ color: "white" }} />
        </GridWrapper>
      )}
    </StorePageWrapper>
  );
}

export default Store;

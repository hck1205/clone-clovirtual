import { useEffect } from "react";
import { useAtom } from "jotai";
import { useSearchParams } from "react-router-dom";

import { keywordFilterAtom } from "@/atoms/keywordFilterAtom";
import { pricingFilterAtom } from "@/atoms/pricingFilterAtom";
import { sortingAtom } from "@/atoms/sortingAtom";
import { pricingRangeFilterAtom } from "@/atoms/pricingRangeFilterAtom";

const useUpdateQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keywordFilter, setKeywordFilter] = useAtom(keywordFilterAtom);
  const [pricingFilter, setPricingFilter] = useAtom(pricingFilterAtom);
  const [sortingFilter, setSortingFilter] = useAtom(sortingAtom);
  const [pricingRangeFilter, setPricingRangeFilter] = useAtom(
    pricingRangeFilterAtom
  );

  useEffect(() => {
    setSearchParams({
      keyword: keywordFilter,
      pricing: JSON.stringify(pricingFilter),
      sorting: sortingFilter.toString(),
      range: JSON.stringify(pricingRangeFilter),
    });
  }, [keywordFilter, pricingFilter, sortingFilter, pricingRangeFilter]);

  const initFilter = () => {
    const keyword = searchParams.get("keyword") || "";
    const pricing = searchParams.get("pricing") || "[]";
    const sorting = searchParams.get("sorting") || "0";
    const range = searchParams.get("range") || "[0, 999]";

    setKeywordFilter(keyword);
    setPricingFilter(JSON.parse(pricing));
    setSortingFilter(Number(sorting));
    setPricingRangeFilter(JSON.parse(range));
  };

  return {
    initFilter,
  };
};

export default useUpdateQueryParams;

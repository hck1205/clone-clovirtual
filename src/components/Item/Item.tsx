import { memo, useMemo } from "react";
import { TStoreData } from "@/API";

import { ItemWrapper, ImageWrapper, InfoWrapper } from "./Item.styled";
import { PRICING_TEXT } from "@/constpack";

type TItem = {
  itemData: TStoreData;
};

function Item({ itemData }: TItem) {
  const { creator, id, imagePath, price, pricingOption } = itemData;

  const pricing = useMemo(() => {
    return pricingOption > 0 ? PRICING_TEXT[pricingOption] : `$${price}`;
  }, [pricingOption, price]);

  return (
    <ItemWrapper>
      <ImageWrapper>
        <img src={imagePath} />
      </ImageWrapper>

      <InfoWrapper>
        <div className="id-creator">
          <h3>{id}</h3>
          <p>{creator}</p>
        </div>

        <div className="price">{pricing}</div>
      </InfoWrapper>
    </ItemWrapper>
  );
}

export default memo(Item);

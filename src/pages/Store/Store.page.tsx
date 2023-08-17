import { useEffect, useState } from 'react';
import { useFetchStore } from '@/hook/useFetchStore';
import { Spinner } from '@/components';
import Item from '@/components/Item';
import Header from '@/components/Header';
import { useInView } from 'react-intersection-observer';

import { StorePageWrapper, GridWrapper } from './Store.styled';

const ITEMS_PER_PAGE = 15;

function Store() {
  const { storeData, isFetching } = useFetchStore();
  const [bottomRef, inView] = useInView();

  const [offset, setOffSet] = useState(1);

  useEffect(() => {
    if (inView) {
      setOffSet((prev) => prev + 1);
    }
  }, [inView]);

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
            .filter((_data, index) => index < ITEMS_PER_PAGE * offset)
            .map((data) => {
              return <Item key={data.id} itemData={data} />;
            })}
          <div ref={bottomRef} style={{ color: 'white' }}>
            test
          </div>
        </GridWrapper>
      )}
    </StorePageWrapper>
  );
}

export default Store;

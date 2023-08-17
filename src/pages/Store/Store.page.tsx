import { useFetchStore } from '@/hook/useFetchStore';
import { Spinner } from '@/components';
import Item from '@/components/Item';
import Header from '@/components/Header';

import { StorePageWrapper, GridWrapper } from './Store.styled';

function Store() {
  const { storeData, isFetching } = useFetchStore();

  return (
    <StorePageWrapper>
      <Header />

      {isFetching ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <GridWrapper>
          {storeData.map((data) => {
            return <Item key={data.id} itemData={data} />;
          })}
        </GridWrapper>
      )}
    </StorePageWrapper>
  );
}

export default Store;

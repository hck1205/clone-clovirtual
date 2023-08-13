import { useFetchStore } from '@/hook/useFetchStore';
import { StorePageWrapper } from './Store.styled';
import { Spinner } from '@/components';

function Store() {
  const { storeData, isFetching } = useFetchStore();

  return (
    <StorePageWrapper>
      {isFetching ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        storeData.map(() => {
          return <div>test</div>;
        })
      )}
    </StorePageWrapper>
  );
}

export default Store;

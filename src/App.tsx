import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutePath, type TRoutes } from '@/pages/routes';

import { Spinner } from '@/components';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {RoutePath.map(
            ({ path, page: PageComponent }: TRoutes, i: number) => {
              return (
                <Route
                  key={`${path}-${i}`}
                  path={path}
                  element={<PageComponent />}
                />
              );
            }
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

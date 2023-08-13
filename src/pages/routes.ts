import { Store } from '@/pages';

export type TRoutes = {
  path: string;
  page: React.LazyExoticComponent<() => JSX.Element>;
  exact?: boolean;
};

export const RoutePath: TRoutes[] = [
  {
    path: '/',
    page: Store,
    exact: true,
  },
];

import React, { lazy, Suspense } from 'react';

const Lazylogin = lazy(() => import('./login'));

const login = props => (
  <Suspense fallback={null}>
    <Lazylogin {...props} />
  </Suspense>
);

export default login;

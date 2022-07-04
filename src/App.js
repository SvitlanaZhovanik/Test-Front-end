import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ClockLoader from 'react-spinners/ClockLoader';
import AppBar from 'components/AppBar';
import { css } from '@emotion/react';
import { ToastContainer } from 'react-toastify';

import { useEffect } from 'react';

const ShopsPage = lazy(() =>
  import('./pages/ShopsPage' /* webpackChunkName: "home-page" */),
);
const ShopingCartPage = lazy(() =>
  import('./pages/ShopingCartPage' /* webpackChunkName: "shoping-cart-page" */),
);
const HistoryPage = lazy(() =>
  import('./pages/HistoryPage' /* webpackChunkName: "history-page" */),
);

export default function App() {
  return (
    <>
      <AppBar>
        <Suspense
          fallback={
            <Container>
              <Row className="justify-content-md-center">
                <ClockLoader
                  color={'#0d6efd'}
                  css={css`
                    margin: 0 auto;
                    display: block;
                  `}
                  size={100}
                />
              </Row>
            </Container>
          }
        >
          <Routes>
            <Route path="/" element={<ShopsPage />} />
            <Route path="order" element={<ShopingCartPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <ToastContainer position="top-center" autoClose={4000} />
      </AppBar>
    </>
  );
}

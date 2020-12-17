import React, { Suspense, lazy } from 'react';

import OffersTable from "../components/OffersTable";
import { BulkImportOffer } from "../components/BulkImportOffer";
import { LoginScreen } from "../components/LoginScreen";
import { Preloader } from '../components/Preloader';

const OfferCalendar = lazy(() => import('../components/OfferCalendar'));

interface IRoutes {
  path: string;
  exact: boolean;
  name: string;
  component: any;
  isPrivateRoute: boolean;
}

export const routes: IRoutes[] = [
  {
    path: "/",
    name: "Login",
    exact: true,
    component: () => <LoginScreen />,
    isPrivateRoute: false,
  },
  {
    path: "/offers",
    name: "Offers",
    exact: false,
    component: () => <OffersTable />,
    isPrivateRoute: true,
  },
  {
    path: "/bulk-import",
    name: "Importer",
    exact: false,
    component: () => <BulkImportOffer />,
    isPrivateRoute: true,
  },
  {
    path: "/offer-calendar",
    name: "OfferCalendar",
    exact: true,
    component: () => <Suspense fallback={<Preloader />}><OfferCalendar /></Suspense>,
    isPrivateRoute: true,
  },
];

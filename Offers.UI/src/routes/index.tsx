import React, { Suspense, lazy } from 'react';

import OffersTable from "../components/Offers";
import { NewOffer } from '../components/Offers/NewOffer';
import { BulkImportOffer } from "../components/BulkImportOffer";
import { LoginScreen } from "../components/LoginScreen";
import { Preloader } from '../components/Preloader';
import { NotFound } from '../components/NotFound';

const OfferCalendar = lazy(() => import('../components/OfferCalendar'));

interface IRoutes {
  path: string;
  exact: boolean;
  name: string;
  component: any;
  isPrivateRoute: boolean;
}

export const routes: IRoutes[] = [{
    path: "/",
    name: "Home",
    exact: true,
    component: () => <OffersTable />,
    isPrivateRoute: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: false,
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
    exact: false,
    component: () => <Suspense fallback={<Preloader />}><OfferCalendar /></Suspense>,
    isPrivateRoute: true,
  },
  {
    path: "/new-offer",
    name: "NewOffer",
    exact: false,
    component: () => <NewOffer />,
    isPrivateRoute: true,
  },
  {
    path: "",
    name: "NotFound",
    exact: false,
    component: () => <NotFound />,
    isPrivateRoute: false,
  },
];

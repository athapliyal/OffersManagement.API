import OffersTable from "../components/OffersTable";
import { BulkImportOffer } from "../components/BulkImportOffer";
import { LoginScreen } from "../components/LoginScreen";

interface IRoutes {
  path: string;
  exact: boolean;
  name: string;
  component: any;
}

export const routes: IRoutes[] = [
  {
    path: "/",
    name: "Login",
    exact: true,
    component: () => <LoginScreen />,
  },
  {
    path: "/logout",
    name: "Login",
    exact: true,
    component: () => <LoginScreen />,
  },
  {
    path: "/home",
    name: "Home",
    exact: true,
    component: () => <OffersTable />,
  },
  {
    path: "/offers",
    name: "Offers",
    exact: false,
    component: () => <OffersTable />,
  },
  {
    path: "/bulk-import",
    name: "Importer",
    exact: false,
    component: () => <BulkImportOffer />,
  },
];

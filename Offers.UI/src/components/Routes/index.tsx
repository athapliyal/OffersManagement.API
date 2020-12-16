import OffersTable from '../../components/OffersTable';
import {BulkImportOffer} from '../../components/BulkImportOffer';


interface IRoutes {
    path: string,
    exact: boolean,
    name: string,
    component: any;
    isPrivateRoute: boolean
};

export const routes: IRoutes[] = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: () => <div>Home</div>,
        isPrivateRoute: false
    },
    {
        path: "/offers",
        name: "Offers",
        exact: false,
        component: () => <OffersTable/>,
        isPrivateRoute: true
    },
    {
        path: "/bulk-import",
        name: "Importer",
        exact: false,
        component: () => <BulkImportOffer />,
        isPrivateRoute: true
    },
    {
        path: "/logout",
        name: "Logout",
        exact: true,
        component: () => <div>you're logged out</div>,
        isPrivateRoute: true
    },
]
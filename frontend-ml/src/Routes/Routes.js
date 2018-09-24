import App from '../App/App';
import Home from '../Home/Home';
import ProductDetails from '../ProductDetails/Container';
import SearchResults from '../SearchResults/Container';

const ApplicationRoutes = {
   App: App,
   Routes: [
    {path: "/", exact: true, component: Home },
    {path: "/items/:id", exact: true, component: ProductDetails},
    {path: "/items?search=", exact: true, component: SearchResults}
   ]
};

export default ApplicationRoutes;

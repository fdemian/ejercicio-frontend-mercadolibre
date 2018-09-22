import App from '../App/App';
import Home from '../Home/Home';
import ProductDetails from '../ProductDetails/ProductDetails';
import SearchResults from '../SearchResults/SearchResults';

const ApplicationRoutes = {
   App: App,
   Routes: [
    {path: "/", exact: true, component: Home },
    {path: "/ProductDetails", exact: true, component: ProductDetails},
    {path: "/SearchResults", exact: true, component: SearchResults}
    /*{component: NotFound }*/
   ]
};

export default ApplicationRoutes;

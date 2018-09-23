import App from '../App/App';
import Home from '../Home/Home';
import ProductDetails from '../ProductDetails/Container';
import SearchResults from '../SearchResults/Container';

const ApplicationRoutes = {
   App: App,
   Routes: [
    {path: "/", exact: true, component: Home },
    {path: "/ProductDetails/:id", exact: true, component: ProductDetails},
    {path: "/SearchResults", exact: true, component: SearchResults}
    /*{component: NotFound }*/
   ]
};

export default ApplicationRoutes;

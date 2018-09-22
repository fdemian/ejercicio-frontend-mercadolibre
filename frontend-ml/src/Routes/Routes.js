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
    /*{path: "/auth", exact: true, component: Authentication, private: false},
    {path: "/login", exact: true, component: Login, private: false},
    {path: "/register", exact: true, component: Register, private: false},
    {path: '/stories/:id/:name', exact: true, component: Story, private: false}
    {component: NotFound }*/
   ]
};

export default ApplicationRoutes;

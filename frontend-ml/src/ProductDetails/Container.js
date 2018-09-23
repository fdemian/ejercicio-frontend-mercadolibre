import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products
  }
}

const NavbarContainer = connect(mapStateToProps, null)(ProductDetails);

export default NavbarContainer;

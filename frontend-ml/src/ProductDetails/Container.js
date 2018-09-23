import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';
import { requestProductDetails } from './Actions';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products,
    product: state.products.product
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: (id) => {
      dispatch(requestProductDetails(id));
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)
(ProductDetails);

export default NavbarContainer;

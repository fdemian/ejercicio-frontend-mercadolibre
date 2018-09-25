import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';
import { requestProductDetails } from './Actions';

const mapStateToProps = (state, ownProps) => {
  return {
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

const Container = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default Container;

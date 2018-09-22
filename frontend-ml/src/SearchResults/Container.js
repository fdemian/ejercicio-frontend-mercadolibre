import { connect } from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products
  }
}

const NavbarContainer = connect(mapStateToProps, null)(SearchResults);

export default NavbarContainer;

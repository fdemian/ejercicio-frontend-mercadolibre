import { connect } from 'react-redux';
import Navbar from './Navbar';
import { requestProducts , changeSearchValue, resetCategories } from './Actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchFn: () => {
      dispatch(requestProducts());
    },
    changeInput: (value) =>{
      dispatch(changeSearchValue(value));
    },
    resetCategories(){
      dispatch(resetCategories());
    }
  }
}

const NavbarContainer = connect(null, mapDispatchToProps)(Navbar);

export default NavbarContainer;

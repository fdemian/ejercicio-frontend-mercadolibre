import { connect } from 'react-redux';
import Navbar from './Navbar';
import { requestProducts , changeSearchValue } from './Actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchFn: () => {
      dispatch(requestProducts());
    },
    changeInput: (value) =>{
      dispatch(changeSearchValue(value));
    }
  }
}

const NavbarContainer = connect(null, mapDispatchToProps)(Navbar);

export default NavbarContainer;

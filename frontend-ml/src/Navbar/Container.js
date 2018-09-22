import { connect } from 'react-redux';
import Navbar from './Navbar';
import { requestProducts , changeSearchValue } from './Actions';

const mapStateToProps = (state, ownProps) => {
  return {}
}

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

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;

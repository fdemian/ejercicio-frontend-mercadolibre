import { connect } from 'react-redux';
import Breadcrumb from './Breadcrumb';

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.categories.categories
  }
}

const BreadcrumbContainer = connect(mapStateToProps, null)(Breadcrumb);

export default BreadcrumbContainer;

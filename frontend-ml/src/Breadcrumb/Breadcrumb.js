import React from 'react';
import CrumbDisplay from './CrumbDisplay';
import './Breadcrumb.css';

const Breadcrumb = ({items}) => {
  return(
  <div className="BreadCrumbContainer">
    {items.map((c, index) =>
      <CrumbDisplay crumb={c} isLast={(index === items.length-1)} />
    )}
  </div>
  );
}

export default Breadcrumb;

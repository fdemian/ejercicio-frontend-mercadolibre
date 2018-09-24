import React from 'react';
import './Breadcrumb.css';

const CrumbDisplay = ({crumb, isLast}) => {
  if(isLast)
    return <span className="Crumb Last">{crumb}</span>;
  else
    return <span className="Crumb">{crumb} >&nbsp;</span>;
}

export default CrumbDisplay;

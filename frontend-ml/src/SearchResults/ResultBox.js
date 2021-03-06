import React from 'react';
import freeShipping from '../assets/ic_shipping@2x.png';
import { formatWithSeparator, formatDecimalPart} from '../utils.js';
import { Link } from 'react-router-dom';

import './SearchResults.css';

const ResultBox = ({ product }) => {

   return(
   <div className="ResultBoxContainer" key={product.id}>

     <div className="ResultBoxFlex">

       <div>
         <img
           src={product.picture}
           alt={product.id}
           className="ResultBoxImage"
         />
       </div>

      <div>

        <div className="ResultBoxHeading">
          <span className="ResultBoxPrice">
            ${formatWithSeparator(product.price.amount, ".")}
            <sup>{formatDecimalPart(product.price.decimals)}</sup>
            {product.free_shipping ?
              <img src={freeShipping} alt="Free shipping" className="ShippingLogo"/> :
              null
            }
          </span>
          {/*<span className="ResultBoxLocation">{product.localidad}</span>*/}
        </div>

        <div className="ResultBoxTitle">
          <p>
            <Link to={`/items/${product.id}`} className="LinkToProductDetail">
              {product.title}
            </Link>
          </p>
        </div>

      </div>

    </div>
   </div>
   );
}

export default ResultBox;

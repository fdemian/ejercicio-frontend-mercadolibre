import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const ResultBox = ({ product }) => {

   return(
   <div className="ResultBoxContainer">

     <hr />

     <div className="ResultBoxFlex">

       <div>
         <img
           src={product.image}
           alt={product.name}
           className="ResultBoxImage"
         />
       </div>

      <div>

        <div className="ResultBoxHeading">
          <span className="ResultBoxPrice">{product.price}</span>
          <span className="ResultBoxLocation">{product.localidad}</span>
        </div>

        <div className="ResultBoxTitle">
          <p>
            <Link to={`/ProductDetails/${product.id}`} className="LinkToProductDetail">
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

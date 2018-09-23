import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const ResultBox = ({ product }) => {

   return(
   <div className="ResultBoxContainer">

     <hr />

     <div>

       <div>
         <img
           src={product.image}
           alt={product.name}
           className="ResultBoxImage"
         />
       </div>

      <div>

        <div>
          <p className="ResultBoxPrice">
            {product.price}
          </p>
          <p className="ResultBoxLocation">
            {product.localidad}
          </p>
        </div>

        <div className="ResultBoxTitle">
          <p>
            <Link to={`/ProductDetails/${product.id}`}>
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

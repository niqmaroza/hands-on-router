import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
export const productList = [
    { id: "1", productName: "Product 1" ,productInfo: 'Info 1'},
    { id: "2", productName: "Product 2" ,productInfo: 'Info 2'},
    { id: "3", productName: "Product 3",productInfo: 'Info 3' },
  ];
const Page2 = () => {
  // useEffect(()=>{
  //     return()=>{
  //         console.log('Unmounting page 2');
  //     }
  // })  
  
  return (
    <div>
      <h2>Page 2</h2>
      <div style={{display:"flex", flexDirection:'column'}}>{productList.map((product)=>{
        return <Link className="item" key={product.id} to={`${product.id}`}>{product.productName}</Link>
      })}</div>
      
      <div>
        <Outlet/>
      </div>
      {/* <Link to='/'>Back</Link> */}
    </div>
  );
};

export default Page2;

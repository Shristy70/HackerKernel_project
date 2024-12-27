import React from "react";
import AddProduct from "./AddProduct";
import Display from "./Display";
import Search from "./Search";
const Home = () => {
  return (
    <>
      <div>
        <img
          src="https://img.freepik.com/premium-psd/trend-fashion-banner-template-premium-psd_641545-41.jpg?w=1060"
          width="100%"
          height="800px"
          alt=""
        />
        <AddProduct />
        <Display />
        <Search />
      </div>
    </>
  );
};

export default Home;

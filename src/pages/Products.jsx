import { React, useContext, useEffect,  useState } from "react";
import CardProduct from "../assets/attomic design/Fragments/CardProduct";
import getProducts from "../services/products.services";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../assets/attomic design/Fragments/TableCart";
import Navbar from "../assets/attomic design/Layouts/Navbar";
import { DarkMode } from "../assets/attomic design/context/DarkMode";

// const Products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "public/Images/product1.jpg",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti architecto eaque error accusantium! A porro tempore labore reiciendis sunt!",
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     image: "public/Images/product1.jpg",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti ",
//   },
//   {
//     id: 3,
//     name: "Eribrow",
//     price: 2000000,
//     image: "public/Images/product1.jpg",
//     description:
//       "Sepatu terbaru dari Eribrow kalian bisa dapatkan sekarang juga yeayy",
//   },
// ];

const ProductPage = () => {
  const [Products, setProducts] = useState([]);
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
 useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

 

  return (
    <>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-2/3 flex flex-wrap">
          {Products.length > 0 &&
            Products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl text-blue-600 font-bold ml-5 mb-2">Card</h1>
          <TableCart Products={Products}/>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductPage;

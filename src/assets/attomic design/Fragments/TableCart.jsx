import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../context/DarkMode";

const TableCart = (props) => {
  const { Products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)

  useEffect(() => {
    if (Products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = Products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, Products]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Products.length > 0 &&
          cart.map((item) => {
            const product = Products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 20)}...</td>
                <td>
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  ${" "}
                  {(item.qty * product.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              Rp{" "}
              {totalPrice.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;

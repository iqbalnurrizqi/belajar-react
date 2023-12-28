import React, { useContext, useEffect, useState } from 'react';
import Button from '../molekul/Button';
import { useLogin } from '../../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { DarkMode } from '../context/DarkMode';

const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0);
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      };
    return (
        <div className="flex justify-end bg-slate-800 text-white items-center h-20 px-10 ">
        {username}
        <Button ClassName="ml-5" onClick={handleLogout}>
          logOut
        </Button>
        
        <div className='flex mx-[20px] items-center bg-blue-500 hover:bg-slate-100 hover:text-slate-800 p-2 rounded-md ml-5'>
            {totalCart}
        </div>
        <Button className="mx-[10px]" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
          </Button>
      </div>
    );
}

export default Navbar;